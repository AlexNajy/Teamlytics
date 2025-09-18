import { makeStyles } from '@griffel/react';
import TaskList from "@/Pages/TasksPage/TaskList.tsx";

const useStyles = makeStyles({
    container: {
        minHeight: '100vh',
        background: 'var(--background)',
    },
    contentWrapper: {
        maxWidth: '95%',
        margin: '0 auto'
    },
    titleSection: {
        textAlign: 'center',
        marginBottom: '3rem',
        paddingTop: '4rem'
    },
    title: {
        fontSize: 'clamp(2.25rem, 5vw, 3rem)',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        color: 'var(--foreground)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
    },
    form: {
        marginBottom: '3rem'
    },
});

const Tasks = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
                <div className={styles.contentWrapper}>

                    <div className={styles.titleSection}>
                        <h2 className={styles.title}>
                            Task Management
                        </h2>
                    </div>

                    <div className={styles.form}>
                        <TaskList />
                    </div>
                </div>
        </div>
    );
};

export default Tasks;