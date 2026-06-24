# ai-backend/routes/assistant.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

from services.rag_service import search
from services.gemini_service import ask_gemini

router = APIRouter()

# ── REQUEST / RESPONSE MODELS ────────────────────────────────────
class ChatMessage(BaseModel):
    role:    str   # "user" or "assistant"
    content: str

class AskRequest(BaseModel):
    question:     str
    chat_history: Optional[list[ChatMessage]] = []

class AskResponse(BaseModel):
    answer:  str
    sources: list[str]

# ── ENDPOINT ─────────────────────────────────────────────────────
@router.post("/ask", response_model=AskResponse)
async def ask_guitar_assistant(request: AskRequest):
    try:
        # Step 1: Search knowledge base
        results = search(query=request.question, top_k=5)

        # Step 2: Filter by relevance score
        # Scores below 0.3 are likely irrelevant
        relevant_results = [r for r in results if r["score"] > 0.3]

        # Step 3: Build context
        if relevant_results:
            context = "\n\n".join([
                f"[From: {r['source']}]\n{r['text']}"
                for r in relevant_results
            ])
            sources = list(set([r["source"] for r in relevant_results]))
        else:
            # No relevant context found — let Gemini answer freely
            context = "No specific context found. Answer from general guitar knowledge."
            sources = []

        # Step 4: Generate answer
        answer = ask_gemini(
            question     = request.question,
            context      = context,
            chat_history = [
                {"role": m.role, "content": m.content}
                for m in request.chat_history
            ]
        )

        return AskResponse(answer=answer, sources=sources)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ── REBUILD INDEX ENDPOINT (admin use) ───────────────────────────
@router.post("/rebuild-index")
async def rebuild_index():
    """Rebuilds FAISS index from knowledge base. Use when content updates."""
    try:
        from services.rag_service import build_index
        index, chunks = build_index()
        return {
            "status":  "success",
            "vectors": index.ntotal,
            "chunks":  len(chunks)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))