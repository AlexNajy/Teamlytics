from datetime import datetime, timedelta
from enum import Enum
from http import HTTPStatus

from pydantic import BaseModel
from sqlalchemy import Interval


class TaskStatusEnum(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    BLOCKED = "blocked"
    COMPLETED = "completed"

class Task(BaseModel):
    title: str
    description: str
    status: TaskStatusEnum = TaskStatusEnum.OPEN
    estimated_time: timedelta
    desired_completion_date: datetime
    notes: str | None = None

class CompletedTask(BaseModel):
    id: int
    title: str
    description: str
    status: TaskStatusEnum
    assignee: str
    estimated_time: timedelta
    desired_completion_date: datetime
    notes: str | None = None

class TaskFailure(BaseModel):
    reason: str
    status: HTTPStatus