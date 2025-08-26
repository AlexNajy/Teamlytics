from enum import Enum

from pydantic import BaseModel
class IssueStatusEnum(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    BLOCKED = "blocked"

class Issue(BaseModel):
    id: int
    title: str
    description: str
    status: IssueStatusEnum
    assignee: str
    estimated_time: str

