import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
    title: {
        fontSize: "1.125rem"
    },
});

const Tasks = () => {
    const classes = useClasses();

    return (
        <div className={classes.title}>
            Tasks
        </div>
    );
};

export default Tasks;
