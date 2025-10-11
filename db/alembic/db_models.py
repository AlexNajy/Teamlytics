import enum
from sqlalchemy import Column, Integer, String, DateTime, Interval, Enum, JSON
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timezone

Base = declarative_base()

class TaskStatusEnum(enum.Enum):
    OPEN = "OPEN"
    IN_PROGRESS = "IN_PROGRESS"
    BLOCKED = "BLOCKED"
    COMPLETED = "COMPLETED"
class TaskORM(Base):
    """
    Task model for storing work tasks in the Teamlytics system
    """
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, nullable=False)

    task_title = Column(String(255), nullable=False)

    task_description = Column(String, nullable=False)

    task_status = Column(Enum(TaskStatusEnum), nullable=False, default=TaskStatusEnum.OPEN)

    total_job_time = Column(Interval, nullable=False)

    desired_completion_date = Column(DateTime, nullable=False)

    notes = Column(String, nullable=True)

    assignee = Column(String(100), nullable=True)

    timestamp = Column(DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)

    def __repr__(self):
        return f"<Task(id={self.id}, description = '{self.task_description}', title='{self.task_title}', assignee='{self.assignee}')>"


class UserORM(Base):
    """
    User model for storing users in the Teamlytics system
    """
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, nullable=False)

    role = Column(String(50), nullable=False)

    first_name = Column(String(100), nullable=False)

    last_name = Column(String(100), nullable=False)

    context_field = Column(String(100), nullable=True)

    current_task = Column(Integer, nullable=True)

    queued_task = Column(JSON, nullable=True, default=list)

    timestamp = Column(DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)

    def __repr__(self):
        return f"<User(id={self.id}, name = '{self.first_name} {self.last_name}', role='{self.role}')>"