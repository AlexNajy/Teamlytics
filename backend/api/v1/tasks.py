from typing import List

from fastapi import APIRouter

from models.task_models import Task
from repositories.tasks_repository import get_all_tasks

tasks_router = APIRouter()

@tasks_router.get("/tasks")
async def get_tasks() -> List[Task]:
    return get_all_tasks()
