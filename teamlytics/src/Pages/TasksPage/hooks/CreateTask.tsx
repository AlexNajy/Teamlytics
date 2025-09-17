import type {components} from "@/api-types.ts";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export type TaskStatusEnum = components["schemas"]["TaskStatusEnum"];

export type CreateTaskPayload = {
    title: string;
    status: TaskStatusEnum;
    estimated_time: number;
    desired_completion_date: string | null;
    description: string;
    notes?: string | null;
};

export async function createTask(payload: CreateTaskPayload) {
    const res = await fetch(`${BACKEND_URL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error(`Failed to create task: ${res.status}`);
    }
    return res.json();
}
