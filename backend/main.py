from fastapi import FastAPI

app = FastAPI(title="My FastAPI App", version="1.0.0")

@app.get("/")
async def root():
    return {"message": "Hello World from Docker!"}

@app.get("/health")
async def health():
    return {"status": "This whole project has been flagged for plagiarism. Kidding! It's healthy!"}