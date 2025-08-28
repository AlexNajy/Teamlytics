import { makeStyles } from '@griffel/react';
import { Card } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
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
    type: {
        backgroundColor: 'var(--primary-transparent)',
        color: 'var(--muted-foreground)',
        fontSize: '0.75rem',
        fontWeight: '500'
    },
    sectionTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'var(--foreground)',
        marginBottom: '1rem'
    }
});

const TaskList = () => {
    const styles = useStyles();

    // Hardcoded tasks
    const tasks = [
        {
            id: 1,
            title: "Update user authentication system",
            type: "Development",
            estimatedTime: "4 hours",
            description: "Implement work email authentication that is specific to the client company"
        },
        {
            id: 2,
            title: "Demo to mock client",
            type: "Research",
            estimatedTime: "2 hours",
            description: "Prepare the MVP and pitch it to a mock potential client for feedback"
        },
        {
            id: 3,
            title: "Weekly standup meeting",
            type: "Meeting",
            estimatedTime: "30 minutes",
            description: "Review sprint goals and discuss projections"
        }
    ];

    return (
        <div className={styles.container}>
            <h3 className={styles.sectionTitle}>Current Tasks</h3>

            {tasks.map((task) => (
                <Card key={task.id} className={styles.taskCard}>
                    <h4 className={styles.title} > {task.title}</h4>
                    <div className={styles.time} > {task.estimatedTime}</div>
                    <p className={styles.description} > {task.description}</p>
                    <Badge className={styles.type} > {task.type}</Badge>
                </Card>
            ))}
        </div>
    );
};

export default TaskList;