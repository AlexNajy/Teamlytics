from enum import Enum

from pydantic import BaseModel
class TaskStatusEnum(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    BLOCKED = "blocked"

class Task(BaseModel):
    id: int
    title: str
    description: str
    status: TaskStatusEnum
    assignee: str
    estimated_time: str

