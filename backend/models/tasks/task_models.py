from datetime import datetime, timedelta
from enum import Enum
from http import HTTPStatus

from pydantic import BaseModel
from sqlalchemy import Interval


class TaskStatusEnum(str, Enum):
    OPEN = "OPEN"
    IN_PROGRESS = "IN_PROGRESS"
    BLOCKED = "BLOCKED"
    COMPLETED = "COMPLETED"

class Task(BaseModel):
    title: str
    description: str
    status: TaskStatusEnum
    estimated_time: float
    desired_completion_date: datetime
    notes: str | None = None
    assignee: str | None = None

class CompletedTask(BaseModel):
    id: int
    title: str
    description: str
    status: TaskStatusEnum
    assignee: str
    estimated_time: timedelta
    desired_completion_date: datetime
    notes: str | None = None
    timestamp: datetime

class TaskFailure(BaseModel):
    reason: str
    status: HTTPStatus