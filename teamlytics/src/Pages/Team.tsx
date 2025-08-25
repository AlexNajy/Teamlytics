import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
    title: {
        fontSize: "1.125rem"
    },
});

const Team = () => {
    const classes = useClasses();

    return (
        <div className={classes.title}>
            Team
        </div>
    );
};

export default Team;
