from http import HTTPStatus
from typing import List
from fastapi import APIRouter, HTTPException, Depends
from returns.result import Success
from sqlalchemy.orm.session import Session

from backend.database import get_db
from backend.models.tasks.task_models import CompletedTask, TaskFailure, Task, TaskId
from backend.repositories.tasks_repository import get_all_tasks, create_task, delete_task

tasks_router = APIRouter()


@tasks_router.get("/tasks", response_model=List[CompletedTask], status_code=HTTPStatus.ACCEPTED, responses={HTTPStatus.INTERNAL_SERVER_ERROR: {"model": TaskFailure}})
async def get_tasks(db: Session = Depends(get_db)) -> List[CompletedTask]:
    result = get_all_tasks(db=db)

    if isinstance(result, Success):
        return result.unwrap()
    else:
        raise HTTPException(
            status_code=result.failure().status,
            detail=result.failure().reason
        )

@tasks_router.post("/tasks", response_model=CompletedTask, status_code=HTTPStatus.CREATED, responses={HTTPStatus.INTERNAL_SERVER_ERROR: {"model": TaskFailure}, HTTPStatus.BAD_REQUEST: {"model": TaskFailure}})
async def create_single_task(task: Task, db: Session = Depends(get_db)) -> CompletedTask:
    result = create_task(db, task)
    if isinstance(result, Success):
        return result.unwrap()
    else:
        raise HTTPException(
            status_code=result.failure().status,
            detail=f"Unable to create task: Could not insert task into database. Error: {result} ",
        )

@tasks_router.delete("/tasks/{task_id}", status_code=HTTPStatus.NO_CONTENT, responses={HTTPStatus.INTERNAL_SERVER_ERROR: {"model": TaskFailure}})
async def delete_single_task(task_id: int, db: Session = Depends(get_db)) -> None:
    result = delete_task(db, task_id)
    if isinstance(result, Success):
        return
    else:
        raise HTTPException(
            status_code=result.failure().status,
            detail=f"Unable to delete task: Could not delete task from database. Error: {result} ",
        )
