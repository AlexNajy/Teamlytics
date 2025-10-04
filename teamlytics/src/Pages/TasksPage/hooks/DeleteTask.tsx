const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const useDeleteTask = async (task_id: number): Promise<boolean> => {
    try {
        const response = await fetch(`${BACKEND_URL}/tasks/${task_id}`, {
            method: 'DELETE',
        });

        if (response.status === 204) {
            return true; // Task deleted successfully
        } else {
            console.error(`Failed to delete task ${task_id}:`, response.status);
            return false;
        }
    } catch (error) {
        console.error('Error deleting task:', error);
        return false;
    }
};

export default useDeleteTask;
