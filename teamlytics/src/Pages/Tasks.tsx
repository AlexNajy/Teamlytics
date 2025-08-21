import AddTask from "@/Components/AddTask";
import TaskList from "@/Components/TaskList";
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
    container: {
        minHeight: '100vh',
        //background: 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #e0e7ff 100%)'
    },
    main: {
        flex: '1',
        padding: '0 1.5rem 2rem'
    },
    contentWrapper: {
        maxWidth: '64rem',
        margin: '0 auto'
    },
    heroSection: {
        textAlign: 'center',
        marginBottom: '3rem',
        paddingTop: '4rem'
    },
    heroTitle: {
        fontSize: 'clamp(2.25rem, 5vw, 3rem)',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        color: '#111827',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
    },
    heroDescription: {
        fontSize: '1.25rem',
        color: '#4b5563',
        maxWidth: '32rem',
        margin: '0 auto 2rem',
        lineHeight: '1.75'
    },
    formSection: {
        marginBottom: '3rem'
    },
    listSection: {
        marginBottom: '3rem'
    }
});

const Tasks = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.contentWrapper}>

                    <div className={styles.heroSection}>
                        <h2 className={styles.heroTitle}>
                            Task Management
                        </h2>
                        <p className={styles.heroDescription}>
                            Create and organize your tasks efficiently
                        </p>
                    </div>

                    <div className={styles.formSection}>
                        <AddTask />
                    </div>

                    <div className={styles.listSection}>
                        <TaskList />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Tasks;