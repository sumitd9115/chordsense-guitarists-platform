print("\n========== VERIFYING INSTALLED PACKAGES ==========\n")

# FastAPI
import fastapi
print(f"✅ FastAPI: {fastapi.__version__} <<<###FASTAPI_OK###>>>")

# Uvicorn
import uvicorn
print(f"✅ Uvicorn: {uvicorn.__version__} <<<###UVICORN_OK###>>>")

# python-dotenv
import dotenv
print(f"✅ python-dotenv: {dotenv.__version__ if hasattr(dotenv, '__version__') else 'Installed'} <<<###DOTENV_OK###>>>")

# Google Generative AI
import google.generativeai as genai
print("✅ google-generativeai: Installed <<<###GENAI_OK###>>>")

# Sentence Transformers
import sentence_transformers
print(f"✅ sentence-transformers: {sentence_transformers.__version__} <<<###SENTENCE_TRANSFORMERS_OK###>>>")

# FAISS
import faiss
print(f"✅ faiss-cpu: {faiss.__version__} <<<###FAISS_OK###>>>")

# LangChain
import langchain
print(f"✅ langchain: {langchain.__version__} <<<###LANGCHAIN_OK###>>>")

# LangChain Community
import langchain_community
print("✅ langchain-community: Installed <<<###LANGCHAIN_COMMUNITY_OK###>>>")

# python-multipart
import multipart
print("✅ python-multipart: Installed <<<###MULTIPART_OK###>>>")

# Librosa
import librosa
print(f"✅ librosa: {librosa.__version__} <<<###LIBROSA_OK###>>>")

# Basic Pitch
import basic_pitch
print("✅ basic-pitch: Installed <<<###BASIC_PITCH_OK###>>>")

# NumPy
import numpy
print(f"✅ numpy: {numpy.__version__} <<<###NUMPY_OK###>>>")

# Pydantic
import pydantic
print(f"✅ pydantic: {pydantic.__version__} <<<###PYDANTIC_OK###>>>")

# HTTPX
import httpx
print(f"✅ httpx: {httpx.__version__} <<<###HTTPX_OK###>>>")

print("\n🎉🎉🎉 ALL PACKAGE IMPORTS COMPLETED SUCCESSFULLY <<<###ALL_DEPENDENCIES_VERIFIED_2026###>>> 🎉🎉🎉")