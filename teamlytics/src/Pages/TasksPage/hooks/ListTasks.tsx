import {useEffect, useState} from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export type Task = {
    id: number;
    title: string;
    description: string;
    status: string;
    assignee: string;
    estimatedTime: string;
};

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch(`${BACKEND_URL}/tasks`);
            const data = await response.json();
            setTasks(data);
            setLoading(false);
        };
        fetchTasks();
    }, []);

    return { tasks, loading };
};

export default useTasks;
