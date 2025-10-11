import { useMutation, useQueryClient } from "@tanstack/react-query";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

async function deleteTaskApi(taskId: number): Promise<void> {
    const response = await fetch(`${BACKEND_URL}/tasks/${taskId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        throw new Error(`Failed to delete task: ${response.statusText}`);
    }
}

export function useDeleteTask() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTaskApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
}
