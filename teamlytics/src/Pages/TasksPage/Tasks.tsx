import {makeStyles} from '@griffel/react';
import TaskList from "@/Pages/TasksPage/TaskList.tsx";

const useStyles = makeStyles({
    container: {
        width: "100%",
        height: "100%",
        background: 'var(--background)',
        padding: "0.5rem",
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