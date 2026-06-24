# ai-backend/services/rag_service.py

import os
import pickle
from pathlib import Path
from dotenv import load_dotenv

from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

load_dotenv()

# ── CONFIGURATION ────────────────────────────────────────────────
KNOWLEDGE_BASE_DIR = Path(__file__).parent.parent / "knowledge_base"
VECTOR_STORE_DIR   = Path(__file__).parent.parent / "vector_store"
VECTOR_STORE_DIR.mkdir(exist_ok=True)

FAISS_INDEX_PATH   = VECTOR_STORE_DIR / "guitar_index.faiss"
CHUNKS_PATH        = VECTOR_STORE_DIR / "chunks.pkl"

CHUNK_SIZE         = 500   # characters per chunk
CHUNK_OVERLAP      = 50    # overlap between chunks
EMBEDDING_MODEL    = "all-MiniLM-L6-v2"

# ── LOAD EMBEDDING MODEL ─────────────────────────────────────────
print("Loading embedding model...")
embedder = SentenceTransformer(EMBEDDING_MODEL)
print("✅ Embedding model loaded")

# ── CHUNKING ─────────────────────────────────────────────────────
def chunk_text(text: str, source: str) -> list[dict]:
    """Split text into overlapping chunks with metadata."""
    chunks = []
    start  = 0

    while start < len(text):
        end   = start + CHUNK_SIZE
        chunk = text[start:end]

        if chunk.strip():
            chunks.append({
                "text":   chunk.strip(),
                "source": source,
            })

        start += CHUNK_SIZE - CHUNK_OVERLAP

    return chunks

# ── LOAD KNOWLEDGE BASE ──────────────────────────────────────────
def load_knowledge_base() -> list[dict]:
    """Read all .txt files from knowledge_base folder."""
    all_chunks = []

    for level_dir in KNOWLEDGE_BASE_DIR.iterdir():
        if not level_dir.is_dir():
            continue

        level = level_dir.name  # Beginner / Intermediate / Advanced

        for txt_file in level_dir.glob("*.txt"):
            content = txt_file.read_text(encoding="utf-8")
            source  = f"{level}/{txt_file.stem}"
            chunks  = chunk_text(content, source)
            all_chunks.extend(chunks)

    print(f"✅ Loaded {len(all_chunks)} chunks from knowledge base")
    return all_chunks

# ── BUILD FAISS INDEX ────────────────────────────────────────────
def build_index():
    """Build FAISS index from knowledge base. Run once."""
    print("\n🔨 Building FAISS index...")

    chunks     = load_knowledge_base()
    texts      = [c["text"] for c in chunks]

    print(f"   Generating embeddings for {len(texts)} chunks...")
    embeddings = embedder.encode(
        texts,
        batch_size=32,
        show_progress_bar=True,
        convert_to_numpy=True
    )

    # Normalize for cosine similarity
    faiss.normalize_L2(embeddings)

    # Build index
    dimension = embeddings.shape[1]
    index     = faiss.IndexFlatIP(dimension)  # Inner Product = cosine after normalization
    index.add(embeddings)

    # Save index and chunks
    faiss.write_index(index, str(FAISS_INDEX_PATH))
    with open(CHUNKS_PATH, "wb") as f:
        pickle.dump(chunks, f)

    print(f"✅ Index built: {index.ntotal} vectors")
    print(f"✅ Saved to: {VECTOR_STORE_DIR}")
    return index, chunks

# ── LOAD OR BUILD INDEX ──────────────────────────────────────────
def get_index():
    """Load existing index or build if not found."""
    if FAISS_INDEX_PATH.exists() and CHUNKS_PATH.exists():
        print("Loading existing FAISS index...")
        index  = faiss.read_index(str(FAISS_INDEX_PATH))
        with open(CHUNKS_PATH, "rb") as f:
            chunks = pickle.load(f)
        print(f"✅ Index loaded: {index.ntotal} vectors")
        return index, chunks
    else:
        return build_index()

# ── SEARCH ───────────────────────────────────────────────────────
def search(query: str, top_k: int = 5) -> list[dict]:
    """Search for most relevant chunks given a query."""
    index, chunks = get_index()

    # Embed query
    query_embedding = embedder.encode(
        [query],
        convert_to_numpy=True
    )
    faiss.normalize_L2(query_embedding)

    # Search
    scores, indices = index.search(query_embedding, top_k)

    results = []
    for score, idx in zip(scores[0], indices[0]):
        if idx != -1:
            results.append({
                "text":   chunks[idx]["text"],
                "source": chunks[idx]["source"],
                "score":  float(score),
            })

    return results

# ── INITIALIZE ON IMPORT ─────────────────────────────────────────
# This runs when the service is first imported
_index, _chunks = get_index()