import {useState} from 'react';
import {makeStyles} from '@griffel/react';
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button.tsx";
import {Duration} from "luxon";
import {Trash} from "lucide-react";
import {useDeleteTask} from "@/Pages/TasksPage/hooks/DeleteTask.tsx";
import {useGetTasks} from "@/Pages/TasksPage/hooks/GetTasks.tsx";
import {useGetUsers} from "@/Pages/TeamPage/hooks/GetUsers.tsx";


const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: '0.5rem',
        width: '100%',
        height: '100%',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '0.5rem',
        padding: '1rem 0.5rem',
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
        boxShadow: "0px 1px 3px 1px var(--shadow)",
        borderRadius: '0.5rem',
        padding: '1rem',
        paddingBottom: '0.5rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        overflow: 'hidden',
        gap: '0.5rem',

        ":hover": {
            boxShadow: "0px 3px 6px 3px var(--shadow)",
        }
    },
    title: {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--foreground)',
        textAlign: 'left',
    },
    topRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    },
    deleteButton: {
        color: "var(--muted-foreground)",
        padding: "0.5rem",
        borderRadius: "0.375rem",
        boxShadow: "none",
        ":hover": {
            backgroundColor: "var(--muted)",
        },
    },
    horizontalLine: {
        color: "var(--muted)",
        alignSelf: 'center',
        width: '80%',
        marginBottom: '0.5rem',
    },

});

const STATUS_COLUMNS: { [key: string]: string } = {
    OPEN: "Open",
    //IN_PROGRESS: "In Progress",
    BLOCKED: "Blocked",
    //COMPLETED: "Completed"
};

const TaskCard = ({task}: { task: any }) => {
    const styles = useStyles();
    const [isHovered, setIsHovered] = useState(false);
    const deleteTask = useDeleteTask();

    const duration = Duration.fromISO(task.estimatedTime);

    const timeParts = [];
    if (duration.days) timeParts.push(`${duration.days}d`);
    if (duration.hours) timeParts.push(`${duration.hours}h`);
    if (duration.minutes) timeParts.push(`${duration.minutes}m`);

    const formattedTime = timeParts.join(" ") || '0m';

    return (
        <Card
            className={styles.taskCard}
            onMouseDown={() => setIsHovered(prev => !prev)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.topRow}>
                <h4 className={styles.title}>{task.title}</h4>
                <Button
                    className={styles.deleteButton}
                    onClick={() => deleteTask.mutate(task.id)}
                >
                    <Trash size={16}> </Trash>
                </Button>
            </div>
            <div className={styles.time}>{formattedTime}</div>
            <div className={`${styles.description} ${isHovered ? styles.cardExpanded : ''}`}>
                {task.description || 'No description available'}
            </div>


        </Card>
    );
};

const TaskList = () => {
    const styles = useStyles();
    const task = useGetTasks()
    const users = useGetUsers();
    if (task.data === undefined || users.data === undefined) {
        // Alex I think we should make a loading component.
        // It should be a reusable page that replaces the content area with a loading page
        // For now ->
        return <div>Loading...</div>
    }

    const tasks = task.data.map((task: any) => {
        return {
            id: task.id,
            title: task.title,
            description: task.description,
            status: task.status,
            estimatedTime: task.estimated_time,
            assignee: task.assignee,
        }
    })

    return (
        <div className={styles.container}>
            {Object.entries(STATUS_COLUMNS).map(([statusKey, statusLabel]) => {
                const unassignedTasks = tasks.filter(
                    task => task.assignee === null && task.status === statusKey
                );

                return (
                    <div key={statusKey} className={styles.column}>
                        <div className={styles.columnTitle}>{statusLabel}</div>
                        <hr className={styles.horizontalLine}/>
                        {unassignedTasks.map(task => (
                            <TaskCard key={task.id} task={task}/>
                        ))}
                    </div>
                );
            })}
            {users.data.map(user => {
                const userTasks = tasks.filter(task => task.assignee === user.id.toString());

                return (
                    <div key={user.id} className={styles.column}>
                        <div className={styles.columnTitle}>
                            {user.first_name} {user.last_name}
                        </div>
                        <hr className={styles.horizontalLine}/>
                        {userTasks.map(task => (
                            <TaskCard key={task.id} task={task}/>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;