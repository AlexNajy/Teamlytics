import os

from dotenv import load_dotenv
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from .api.v1.tasks import tasks_router

load_dotenv()
frontend_port = os.getenv("FRONTEND_PORT")
app = FastAPI(title="My FastAPI App", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[f"http://localhost:{frontend_port}"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(tasks_router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Hello World from Docker!"}

@app.get("/health")
async def health():
    return {"status": "This whole project has been flagged for plagiarism. Kidding! It's healthy!"}
