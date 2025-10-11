from http import HTTPStatus

from fastapi import APIRouter, Depends, HTTPException
from returns.result import Success
from sqlalchemy.orm import Session

from backend.database import get_db
from backend.models.teams.user_models import CompletedUser, User, UserId
from backend.repositories.users_repository import get_all_users, create_user, delete_user

teams_router = APIRouter()

@teams_router.get("/users", response_model=list[CompletedUser], status_code=HTTPStatus.ACCEPTED, responses={HTTPStatus.INTERNAL_SERVER_ERROR: {"model": CompletedUser}})
async def get_tasks(db: Session = Depends(get_db)) -> list[CompletedUser]:
    result = get_all_users(db=db)
    if isinstance(result, Success):
        return result.unwrap()
    else:
        raise HTTPException(
            status_code=result.failure().status,
            detail=result.failure().reason
        )

@teams_router.post("/users", response_model=CompletedUser, status_code=HTTPStatus.CREATED, responses={HTTPStatus.INTERNAL_SERVER_ERROR: {"model": CompletedUser}})
async def create_single_user(user: User, db: Session = Depends(get_db)) -> CompletedUser:
    result = create_user(db=db, user=user)
    if isinstance(result, Success):
        return result.unwrap()
    else:
        raise HTTPException(
            status_code=result.failure().status,
            detail=result.failure().reason
        )

@teams_router.delete("/users/{user_id}", status_code=HTTPStatus.NO_CONTENT, responses={HTTPStatus.INTERNAL_SERVER_ERROR: {"model": CompletedUser}})
async def delete_single_user(user_id: int, db: Session = Depends(get_db)) -> None:
    result = delete_user(db=db, user_id=user_id)
    if isinstance(result, Success):
        return
    else:
        raise HTTPException(
            status_code=result.failure().status,
            detail=f"Unable to delete user: Could not delete user from database. Error: {result} "
        )
