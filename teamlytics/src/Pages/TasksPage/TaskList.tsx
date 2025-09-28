import { useState } from 'react';
import { makeStyles } from '@griffel/react';
import { Card } from "@/Components/ui/card";
import useTasks from "@/Pages/TasksPage/hooks/FetchTasks.tsx";
import { Duration } from "luxon";


const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: "repeat(4, 1fr)",
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
        padding: '0.5rem',
        boxShadow: "0px 2px 4px 2px var(--shadow)",
    },
    columnTitle: {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'var(--foreground)',
        textAlign: 'center',
    },
    taskCard: {
        background: 'var(--card)',
        border: '1px solid var(--border)',
        boxShadow: "0px 2px 4px 2px var(--shadow)",
        borderRadius: '0.5rem',
        padding: '1rem',
        paddingBottom: '0.5rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        overflow: 'hidden',
        gap: '0.5rem',

        ":hover": {
            boxShadow: "0px 4px 8px 4px var(--shadow)",
        }
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
        transition: 'all 0.2s ease-in-out',
        paddingTop: '0',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'var(--border)',
        marginTop: '0',
    },
    cardExpanded: {
        maxHeight: '200px',
        opacity: '1',
        paddingTop: '0.5rem',
        borderTopWidth: '1px',
        marginTop: '0.5rem',
    }
});

const STATUS_COLUMNS: { [key: string]: string } = {
    OPEN: "Open",
    IN_PROGRESS: "In Progress",
    BLOCKED: "Blocked",
    COMPLETED: "Completed"
};

const TaskCard = ({ task }: { task: any }) => {
    const styles = useStyles();
    const [isHovered, setIsHovered] = useState(false);

    const duration = Duration.fromISO(task.estimatedTime);

    const timeParts = [];
    if (duration.days) timeParts.push(`${duration.days}d`);
    if (duration.hours) timeParts.push(`${duration.hours}h`);
    if (duration.minutes) timeParts.push(`${duration.minutes}m`);

    const formattedTime = timeParts.join(" ") || '0m';

    return (
        <Card
            className={styles.taskCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h4 className={styles.title}>{task.title}</h4>
            <div className={styles.time}>{formattedTime}</div>
            <div className={`${styles.description} ${isHovered ? styles.cardExpanded : ''}`}>
                {task.description || 'No description available'}
            </div>
        </Card>
    );
};

const TaskList = () => {
    const styles = useStyles();
    const fetchedTasks = useTasks()

    const tasks = Object.values(fetchedTasks.tasks).map((task: any) => {
        return {
            id: task.id,
            title: task.title,
            description: task.description,
            status: task.status,
            estimatedTime: task.estimated_time
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