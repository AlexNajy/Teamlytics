from datetime import timedelta
from http import HTTPStatus
from typing import List

from returns.result import Result, Failure, Success
from sqlalchemy.orm.session import Session

from backend.models.tasks.task_models import Task, CompletedTask, TaskFailure
from db.alembic.db_models import TaskORM


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


def get_all_tasks(db: Session) -> Result[List[CompletedTask], TaskFailure]:
    try:
        tasks = db.query(TaskORM).all()
        completed_tasks = []
        for task in tasks:
            completed_task = CompletedTask(
                id=task.id,
                title=task.task_title,
                description=task.task_description,
                status=task.task_status.value,
                estimated_time=task.total_job_time,
                desired_completion_date=task.desired_completion_date,
                notes=task.notes,
                assignee=task.assignee or "Unassigned",
                timestamp=task.timestamp
            )
            completed_tasks.append(completed_task)
        return Success(completed_tasks)
    except Exception as e:
        db.rollback()
        return Failure(TaskFailure(
            reason="Unable to fetch tasks: Could not query tasks from database. Error: " + str(e),
            status=HTTPStatus.INTERNAL_SERVER_ERROR
        ))

