from typing import List

from models.issue_models import Issue, IssueStatusEnum


def get_all_issues() -> List[Issue]:
    return [
        Issue(
            id=1,
            title=" Update user authentication system",
            description="Create a role based authentication system for different user types",
            status= IssueStatusEnum.OPEN,
            assignee="Luke",
            estimated_time="5 days"
        ),
        Issue(
            id=2,
            title="Demo to mock client",
            description="Prepare the MVP and pitch it to a mock potential client for feedback",
            status=IssueStatusEnum.BLOCKED,
            assignee="Luke and Alex",
            estimated_time="2 days"
        ),
        Issue(
            id=3,
            title="Finish MVP",
            description="Complete the minimum viable product for initial release",
            status=IssueStatusEnum.IN_PROGRESS,
            assignee="Luke and Alex",
            estimated_time="3 days"
        )

    ]
