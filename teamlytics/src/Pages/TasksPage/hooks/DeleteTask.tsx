import {useState} from "react";
import { useQueryClient } from "@tanstack/react-query";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function useDeleteTask() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    const queryClient = useQueryClient();

    const deleteTask = async (taskId: number): Promise<null> => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch(`${BACKEND_URL}/tasks/${taskId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (!response.ok) {
                throw new Error(`Failed to delete task: ${response.statusText}`)
            }

            await queryClient.invalidateQueries({ queryKey: ['tasks'] });

            return await response.json()

        } catch (err) {
            const error = err instanceof Error ? err : new Error("Unknown error")
            setError(error)
            throw error
        } finally {
            setIsLoading(false)
        }
    }
    return {deleteTask, isLoading, error}
}
