from datetime import datetime
from http import HTTPStatus

from pydantic import BaseModel

from backend.models.tasks.task_models import CompletedTask, TaskId


class User(BaseModel):
    role: str
    first_name: str
    last_name: str
    context_field: str | None = None


class CompletedUser(BaseModel):
    id: int
    role: str
    first_name: str
    last_name: str
    context_field: str
    current_task: TaskId | None
    queued_task: list[TaskId]
    timestamp: datetime


class UserId(BaseModel):
    id: int

class TeamsFailure(BaseModel):
    reason: str
    status: HTTPStatus