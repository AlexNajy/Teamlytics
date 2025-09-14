import { makeStyles } from '@griffel/react';
import { Card } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import useTasks, {type Task} from "@/Pages/TasksPage/hooks/ListTasks.tsx";

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        width: '100%',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '0.5rem',
        padding: '1rem',
        minHeight: '300px'
    },
    columnTitle: {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'var(--foreground)',
        textAlign: 'center',
        marginBottom: '1rem',
    },
    taskCard: {
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '0.5rem',
        padding: '1.5rem'
    },
    title: {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'var(--foreground)',
        textAlign: 'center',
    },
    time: {
        fontSize: '0.875rem',
        color: 'var(--muted-foreground)',
        textAlign: 'left',
    },
    description: {
        color: 'var(--foreground)',
        fontSize: '0.875rem',
        lineHeight: '1.5',
        textAlign: 'left',
    },
    assignee: {
        backgroundColor: 'var(--primary-transparent)',
        color: 'var(--muted-foreground)',
        fontSize: '0.75rem',
        fontWeight: '500'
    }
});

const STATUS_COLUMNS: { [key: string]: string } = {
    open: "Open",
    in_progress: "In Progress",
    blocked: "Blocked",
    completed: "Completed"
};

const TaskList = () => {
    const styles = useStyles();
    const fetchedTasks = useTasks()
    const tasks = fetchedTasks.tasks.map((issue: Task) => {
        return {
            id: issue.id,
            title: issue.title,
            description: issue.description,
            status: issue.status,
            assignee: issue.assignee,
            estimatedTime: issue.estimatedTime
        }
    })

    return (
        <div>
            <div className={styles.container}>
                {Object.entries(STATUS_COLUMNS).map(([statusKey, statusLabel]) => (
                    <div key={statusKey} className={styles.column}>
                        <div className={styles.columnTitle}>{statusLabel}</div>

                        {tasks
                            .filter(task => task.status === statusKey)
                            .map(task => (
                                <Card key={task.id} className={styles.taskCard}>
                                    <h4 className={styles.title}>{task.title}</h4>
                                    <div className={styles.time}>{task.estimatedTime}</div>
                                    <p className={styles.description}>{task.description}</p>
                                    <Badge className={styles.assignee}>{task.assignee}</Badge>
                                </Card>
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;