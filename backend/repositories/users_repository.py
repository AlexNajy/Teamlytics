from datetime import datetime, timezone
from http import HTTPStatus

from returns.result import Result, Failure, Success
from sqlalchemy.orm import Session

from backend.models.tasks.task_models import TaskId
from backend.models.teams.user_models import TeamsFailure, CompletedUser, User, UserId
from db.alembic.db_models import UserORM


def create_user(db: Session, user: User) -> Result[CompletedUser, TeamsFailure]:
    try:
        row = UserORM(
        role = user.role,
        first_name = user.first_name,
        last_name = user.last_name,
        context_field = user.context_field,
        current_task = None,
        queued_task = [],
        timestamp = datetime.now(timezone.utc)
        )
        db.add(row)
        db.commit()
        db.refresh(row)

    except Exception as e:
        db.rollback()
        return Failure(TeamsFailure(
            reason="Unable to create user: Could not insert user into database. Error: " + str(e),
            status=HTTPStatus.INTERNAL_SERVER_ERROR
        ))
    return Success(CompletedUser(
        id=row.id,
        role=row.role,
        first_name=row.first_name,
        last_name=row.last_name,
        context_field=row.context_field,
        current_task=None,
        queued_task=[],
        timestamp=row.timestamp
    ))

def get_all_users(db: Session) -> Result[list[CompletedUser], TeamsFailure]:
    try:
        users = db.query(UserORM).all()
        completed_users = []
        for user in users:
            fetched_user = CompletedUser(
                id=user.id,
                role=user.role,
                first_name=user.first_name,
                last_name=user.last_name,
                context_field=user.context_field,
                current_task=user.current_task,
                queued_task= user.queued_task,
                timestamp=user.timestamp
            )
            completed_users.append(fetched_user)
        return Success(completed_users)
    except Exception as e:
        db.rollback()
        return Failure(TeamsFailure(
            reason="Unable to fetch users: Could not fetch users from database. Error: " + str(e),
            status=HTTPStatus.INTERNAL_SERVER_ERROR
        ))
def delete_user(db: Session, user_id: int) -> Result[None, TeamsFailure]:
    try:
        user = db.query(UserORM).filter(user_id == UserORM.id).first()
        if not user:
            return Failure(TeamsFailure(
                reason=f"User with id {user_id} not found.",
                status=HTTPStatus.NOT_FOUND
            ))
        db.delete(user)
        db.commit()
        return Success(None)
    except Exception as e:
        db.rollback()
        return Failure(TeamsFailure(
            reason="Unable to delete user: Could not delete user from database. Error: " + str(e),
            status=HTTPStatus.INTERNAL_SERVER_ERROR
        ))


