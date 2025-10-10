import type {CompletedTask} from "@/sdk";
import {useQuery} from "@tanstack/react-query";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

async function fetchTasks(): Promise<CompletedTask[]> {
    const response = await fetch(`${BACKEND_URL}/tasks`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if (!response.ok) {
        throw new Error(`Failed to fetch tasks: ${response.statusText}`)
    }
        return response.json()
}
export function useGetTasks() {
    return useQuery<CompletedTask[]>({
        queryKey: ["tasks"],
        queryFn: fetchTasks,
    })
}