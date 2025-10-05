import {type CompletedTask, type Task} from "@/sdk";
import {useState} from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function useCreateTask() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    const createTask = async (task: Task): Promise<CompletedTask> => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch(`${BACKEND_URL}/tasks`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task)
            })
            if (!response.ok) {
                throw new Error(`Failed to create task: ${response.statusText}`)
            }

            return await response.json()

        } catch (err) {
            const error = err instanceof Error ? err : new Error("Unknown error")
            setError(error)
            throw error
        } finally {
            setIsLoading(false)
        }
    }
    return {createTask, isLoading, error}
}
