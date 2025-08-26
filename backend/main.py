from fastapi import FastAPI

from api.v1.tasks import tasks_router

app = FastAPI(title="My FastAPI App", version="1.0.0")

app.include_router(tasks_router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Hello World from Docker!"}

@app.get("/health")
async def health():
    return {"status": "This whole project has been flagged for plagiarism. Kidding! It's healthy!"}