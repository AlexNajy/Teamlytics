# base_models.py
from sqlalchemy import Column, Integer, String, DateTime, Interval
from sqlalchemy.sql import func
from database import Base


class TaskORM(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)  # Auto increment int
    task_title = Column(String(255), nullable=False)  # Task Title
    description = Column(String, nullable=True)  # Description
    total_job_time = Column(Interval, nullable=True)  # Duration (e.g., 2 hours 30 minutes)
    desired_completion_date = Column(DateTime(timezone=True), nullable=True)  # ISO format datetime
    notes = Column(String, nullable=True)  # Notes
    timestamp = Column(DateTime(timezone=True), server_default=func.now())  # Auto timestamp
    technician = Column(String(255), nullable=True)  # Technician name
    status = Column(String(50), nullable=False, server_default="open")  # Task status