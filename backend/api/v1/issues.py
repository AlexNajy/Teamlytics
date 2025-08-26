from typing import List

from fastapi import APIRouter

from models.issue_models import Issue
from repositories.issues_repository import get_all_issues

issues_router = APIRouter()

@issues_router.get("/issues")
async def get_issues() -> List[Issue]:
    return get_all_issues()
