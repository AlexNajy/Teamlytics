import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
    title: {
        fontSize: "1.125rem"
    },
});

const Schedule = () => {
    const classes = useClasses();

    return (
        <div className={classes.title}>
            Schedule
        </div>
    );
};

export default Schedule;
