import { makeStyles } from '@griffel/react';
import TaskList from "@/Pages/TasksPage/TaskList.tsx";

const useStyles = makeStyles({
    container: {
        minHeight: '100vh',
        background: 'var(--background)',
    },
    main: {
        flex: '1',
        padding: '0 1.5rem 2rem'
    },
    contentWrapper: {
        maxWidth: '64rem',
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
    subtitle: {
        fontSize: '1.25rem',
        color: 'var(--muted-foreground)',
        maxWidth: '32rem',
        margin: '0 auto 2rem',
        lineHeight: '1.75'
    },
    form: {
        marginBottom: '3rem'
    },
});

const Tasks = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.contentWrapper}>

                    <div className={styles.titleSection}>
                        <h2 className={styles.title}>
                            Task Management
                        </h2>
                        <p className={styles.subtitle}>
                            View and manage your tasks
                        </p>
                    </div>

                    <div className={styles.form}>
                        <TaskList />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Tasks;