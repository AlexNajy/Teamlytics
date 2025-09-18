from datetime import datetime, timedelta
from http import HTTPStatus
from typing import List

from returns.result import Result, Failure, Success
from sqlalchemy.orm.session import Session

import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..'))
from db.alembic.db_models import TaskORM
from models.tasks.task_models import CompletedTask, TaskStatusEnum, Task, TaskFailure


def create_task(db: Session, task: Task) -> Result[CompletedTask, TaskFailure]:
    try:

        converted_job_time = timedelta(hours=task.estimated_time)

        row = TaskORM(
            task_title=task.title,
            task_description=task.description,
            task_status=task.status,
            total_job_time=converted_job_time,
            desired_completion_date=task.desired_completion_date,
            notes=task.notes,
            assignee=task.assignee
        )
        db.add(row)
        db.commit()
        db.refresh(row)

    except Exception as e:
        db.rollback()
        return Failure(TaskFailure(
            reason="Unable to create task: Could not insert task into database. Error: " + str(e),
            status=HTTPStatus.INTERNAL_SERVER_ERROR
        ))

    return Success(CompletedTask(
        id=row.id,
        title=row.task_title,
        description=row.task_description,
        status=row.task_status.value,
        estimated_time=row.total_job_time,
        desired_completion_date=row.desired_completion_date,
        notes=row.notes,
        assignee=row.assignee or "Unassigned",
        timestamp=row.timestamp
    ))


def get_all_tasks() -> List[CompletedTask]:
    return [
        CompletedTask(
            id=1,
            title=" Update user authentication system",
            description="Create a role based authentication system for different user types",
            status=TaskStatusEnum.OPEN,
            assignee="Charlie",
            estimated_time=timedelta(hours=2, minutes=30),
            desired_completion_date=datetime(2024, 7, 1)
        ),
        CompletedTask(
            id=2,
            title="Demo to mock client",
            description="Prepare the MVP and pitch it to a mock potential client for feedback",
            status=TaskStatusEnum.BLOCKED,
            assignee="Alex",
            estimated_time=timedelta(hours=3),
            desired_completion_date=datetime(2024, 6, 20)
        ),
        CompletedTask(
            id=3,
            title="Finish MVP",
            description="Complete the minimum viable product for initial release",
            status=TaskStatusEnum.IN_PROGRESS,
            assignee="Arshya",
            estimated_time=timedelta(hours = 48),
            desired_completion_date=datetime(2024, 6, 25)
        ),
        CompletedTask(
            id=4,
            title="Make Coffee",
            description="Grab a coffee for the CFO from the Nespresso machine in the kitchen",
            status=TaskStatusEnum.IN_PROGRESS,
            assignee="Luke",
            estimated_time=timedelta(minutes=5),
            desired_completion_date=datetime(2024, 6, 25)
        )


    ]
