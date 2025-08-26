from typing import List

from models.task_models import Task, TaskStatusEnum


def get_all_tasks() -> List[Task]:
    return [
        Task(
            id=1,
            title=" Update user authentication system",
            description="Create a role based authentication system for different user types",
            status= TaskStatusEnum.OPEN,
            assignee="Luke",
            estimated_time="5 days"
        ),
        Task(
            id=2,
            title="Demo to mock client",
            description="Prepare the MVP and pitch it to a mock potential client for feedback",
            status=TaskStatusEnum.BLOCKED,
            assignee="Luke and Alex",
            estimated_time="2 days"
        ),
        Task(
            id=3,
            title="Finish MVP",
            description="Complete the minimum viable product for initial release",
            status=TaskStatusEnum.IN_PROGRESS,
            assignee="Luke and Alex",
            estimated_time="3 days"
        )

    ]
