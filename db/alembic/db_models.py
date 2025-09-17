from sqlalchemy import Column, Integer, String, DateTime, Interval
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()


class Task(Base):
    """
    Task model for storing work tasks in the Teamlytics system
    """
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, nullable=False)

    task_title = Column(String(255), nullable=False)

    total_job_time = Column(Interval, nullable=False)

    desired_completion_date = Column(DateTime, nullable=False)

    notes = Column(String, nullable=True)

    timestamp = Column(DateTime, default=datetime.utcnow, nullable=False)

    technician = Column(String(100), nullable=True)

    def __repr__(self):
        return f"<Task(id={self.id}, title='{self.task_title}', technician='{self.technician}')>"