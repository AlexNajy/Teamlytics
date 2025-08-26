from fastapi import FastAPI

from api.v1.issues import issues_router

app = FastAPI(title="My FastAPI App", version="1.0.0")

app.include_router(issues_router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Hello World from Docker!"}

@app.get("/health")
async def health():
    return {"status": "This whole project has been flagged for plagiarism. Kidding! It's healthy!"}