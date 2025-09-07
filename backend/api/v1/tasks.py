from http import HTTPStatus
from typing import List, Union
from fastapi import APIRouter, HTTPException
from returns.result import Result, Success
from models.tasks.task_models import CompletedTask, TaskFailure, Task
from repositories.tasks_repository import get_all_tasks, create_task

tasks_router = APIRouter()


@tasks_router.get("/tasks")
async def get_tasks() -> List[CompletedTask]:
    return get_all_tasks()


@tasks_router.post("/tasks", response_model=CompletedTask, status_code=HTTPStatus.CREATED,
                   responses={HTTPStatus.INTERNAL_SERVER_ERROR: {"model": TaskFailure}})
async def create_single_task(task: Task) -> CompletedTask:
    result = create_task(task)
    if isinstance(result, Success):
        return result.unwrap()
    else:
        raise HTTPException(
            status_code=result.failure().status,
            detail=f"Unable to create task: Could not insert task into database. Error: {result} ",
        )
