import {makeStyles} from '@griffel/react';
import TaskList from "@/Pages/TasksPage/TaskList.tsx";

const useStyles = makeStyles({
    container: {
        background: 'var(--background)',
        height: '90vh',
        padding: "0.5rem",
        marginBottom: '3rem',
    },
});

const Tasks = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <TaskList/>
        </div>
    );
};

export default Tasks;