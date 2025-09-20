import { makeStyles } from '@griffel/react';
import TaskList from "@/Pages/TasksPage/TaskList.tsx";

const useStyles = makeStyles({
    container: {
        background: 'var(--background)',
    },
    contentWrapper: {
        maxWidth: '95%',
        margin: '0 auto',
        paddingTop: "2rem",
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
                    <div className={styles.form}>
                        <TaskList />
                    </div>
                </div>
        </div>
    );
};

export default Tasks;