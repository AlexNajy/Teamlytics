import { makeStyles } from '@griffel/react';
import { Card } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import useTasks, {type Task} from "@/Pages/IssuesPage/hooks/ListIssues.tsx";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    taskCard: {
        background: 'white',
        border: '1px solid #d1d5db',
        borderRadius: '0.5rem',
        padding: '1.5rem'
    },
    title: {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: '#111827',
        textAlign: 'center',
    },
    time: {
        fontSize: '0.875rem',
        color: '#6b7280',
        textAlign: 'left',
    },
    description: {
        color: '#4b5563',
        fontSize: '0.875rem',
        lineHeight: '1.5',
        textAlign: 'left',
    },
    assignee: {
        backgroundColor: '#f3f4f6',
        color: '#374151',
        fontSize: '0.75rem',
        fontWeight: '500'
    },
    sectionTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '1rem'
    }
});

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
        <div className={styles.container}>
            <h3 className={styles.sectionTitle}>Current Tasks</h3>

            {tasks.map((task) => (
                <Card key={task.id} className={styles.taskCard}>
                    <h4 className={styles.title} > {task.title}</h4>
                    <div className={styles.time} > {task.estimatedTime}</div>
                    <p className={styles.description} > {task.description}</p>
                    <p className={styles.description} > {task.status}</p>
                    <Badge className={styles.assignee} > {task.assignee}</Badge>
                </Card>
            ))}
        </div>
    );
};

export default TaskList;