from typing import List

from backend.models.issue_models import Issue, IssueStatusEnum
from backend.repositories.issues_repository import get_all_issues


class IssuesService:
    def get_all_issues(self) -> List[Issue]:
        all_issues = get_all_issues()

        order_priority = {IssueStatusEnum.OPEN: 1, IssueStatusEnum.IN_PROGRESS: 2, IssueStatusEnum.BLOCKED: 3}
        sorted_issues = sorted(all_issues, key=lambda issue: order_priority[issue.status])
        return sorted_issues