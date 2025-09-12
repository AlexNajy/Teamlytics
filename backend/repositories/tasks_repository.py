from datetime import datetime, timedelta
from http import HTTPStatus
from typing import List

from returns.result import Result, Failure, Success

from base_models import TaskORM
from database import SessionLocal
from models.tasks.task_models import CompletedTask, TaskStatusEnum, Task, TaskFailure


def create_task(task: Task) -> Result[CompletedTask, TaskFailure]:
    row = TaskORM(
        task_title=task.title,
        description=task.description,
        total_job_time=task.estimated_time,
        desired_completion_date=task.desired_completion_date,
        notes=task.notes,
        timestamp=datetime.now(),
        status=task.status
    )
    try:
        with SessionLocal() as db:
            db.add(row)
            db.commit()
            db.refresh(row)
    except Exception as e:
        return Failure(TaskFailure(
            reason="Unable to create task: Could not insert task into database. Error: " + str(e),
            status=HTTPStatus.INTERNAL_SERVER_ERROR
        ))

    return Success(CompletedTask(
        id=row.id,
        title=row.task_title,
        description=row.description,
        status=row.status,
        assignee="Meeper",
        estimated_time=row.total_job_time,
        desired_completion_date=row.desired_completion_date,
    ))


def get_all_tasks() -> List[CompletedTask]:
    return [
        CompletedTask(
            id=1,
            title=" Update user authentication system",
            description="Create a role based authentication system for different user types",
            status=TaskStatusEnum.OPEN,
            assignee="Luke",
            estimated_time=timedelta(hours=6),
            desired_completion_date=datetime(2024, 7, 1)
        ),
        CompletedTask(
            id=2,
            title="Demo to mock client",
            description="Prepare the MVP and pitch it to a mock potential client for feedback",
            status=TaskStatusEnum.BLOCKED,
            assignee="Luke and Alex",
            estimated_time=timedelta(hours=6),
            desired_completion_date=datetime(2024, 6, 20)
        ),
        CompletedTask(
            id=3,
            title="Finish MVP",
            description="Complete the minimum viable product for initial release",
            status=TaskStatusEnum.IN_PROGRESS,
            assignee="Luke and Alex",
            estimated_time=timedelta(hours=6),
            desired_completion_date=datetime(2024, 6, 25)
        )

    ]
