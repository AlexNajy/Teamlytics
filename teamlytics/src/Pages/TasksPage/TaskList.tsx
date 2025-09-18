import { useState } from 'react';
import { makeStyles } from '@griffel/react';
import { Card } from "@/Components/ui/card";
import useTasks from "@/Pages/TasksPage/hooks/ListTasks.tsx";

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0.5rem',
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
        minHeight: '300px',
        boxShadow: "0px 2px 4px 2px var(--shadow)",
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
        boxShadow: "0px 2px 4px 2px var(--shadow)",
        borderRadius: '0.5rem',
        padding: '1rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        overflow: 'hidden',
        gap: '1rem',
    },
    taskCardHovered: {
        boxShadow: "0px 4px 8px 4px var(--shadow)",
        //transform: 'translateY(-2px)',
    },
    title: {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--foreground)',
        textAlign: 'left',
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
        maxHeight: '0',
        opacity: '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        paddingTop: '0',
        borderTopWidth: '0px',
        borderTopStyle: 'solid',
        borderTopColor: 'var(--border)',
        marginTop: '0',
    },
    descriptionExpanded: {
        maxHeight: '200px',
        opacity: '1',
        paddingTop: '0.5rem',
        borderTopWidth: '1px',
        marginTop: '0.5rem',
    }
});

const STATUS_COLUMNS: { [key: string]: string } = {
    open: "Open",
    in_progress: "In Progress",
    blocked: "Blocked",
    completed: "Completed"
};

const formatDuration = (duration: string | null | undefined): string => {
    if (!duration) return 'No estimate';

    const hoursMatch = duration.match(/PT(\d+)H/);
    if (hoursMatch) {
        return `${hoursMatch[1]} hours`;
    }
    const minutesMatch = duration.match(/PT(\d+)M/);
    if (minutesMatch) {
        return `${minutesMatch[1]} minutes`;
    }
    const hoursMinutesMatch = duration.match(/PT(\d+)H(\d+)M/);
    if (hoursMinutesMatch) {
        return `${hoursMinutesMatch[1]}h ${hoursMinutesMatch[2]}m`;
    }
    return duration;
};

const TaskCard = ({ task }: { task: any }) => {
    const styles = useStyles();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            className={`${styles.taskCard} ${isHovered ? styles.taskCardHovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h4 className={styles.title}>{task.title}</h4>
            <div className={styles.time}>{formatDuration(task.estimatedTime)}</div>
            <div className={`${styles.description} ${isHovered ? styles.descriptionExpanded : ''}`}>
                {task.description || 'No description available'}
            </div>
        </Card>
    );
};

const TaskList = () => {
    const styles = useStyles();
    const fetchedTasks = useTasks()
    // Convert the object to array and map the fields
    const tasks = Object.values(fetchedTasks.tasks).map((issue: any) => {
        return {
            id: issue.id,
            title: issue.title,
            description: issue.description,
            status: issue.status,
            estimatedTime: issue.estimated_time
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
                                <TaskCard key={task.id} task={task} />
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;