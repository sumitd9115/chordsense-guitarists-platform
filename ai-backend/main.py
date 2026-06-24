from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="Guitar AI Backend",
    description="AI services for Guitar Learning App",
    version="1.0.0"
)

# CORS — allows React and Node.js to talk to this
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",   # React frontend
        "http://localhost:3000",   # Node.js backend
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import routers (we'll create these next)
from routes.assistant import router as assistant_router
from routes.chord_recognition import router as chord_router
from routes.lyrics_support import router as lyrics_router

# Register routers
app.include_router(assistant_router, prefix="/api/assistant", tags=["AI Assistant"])
app.include_router(chord_router, prefix="/api/audio", tags=["Audio Analysis"])
app.include_router(lyrics_router, prefix="/api/lyrics", tags=["Lyrics Support"])

# Health check endpoint
@app.get("/")
async def root():
    return {
        "status": "Guitar AI Backend is running",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}