from typing import List

from backend.models.task_models import Task, TaskStatusEnum
from backend.repositories.tasks_repository import get_all_tasks


class TasksService:
    def get_all_tasks(self) -> List[Task]:
        all_tasks = get_all_tasks()

        order_priority = {TaskStatusEnum.OPEN: 1, TaskStatusEnum.IN_PROGRESS: 2, TaskStatusEnum.BLOCKED: 3}
        sorted_tasks = sorted(all_tasks, key=lambda task: order_priority[task.status])
        return sorted_tasks