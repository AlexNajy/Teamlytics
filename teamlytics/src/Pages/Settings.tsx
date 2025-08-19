import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
    title: {
        fontSize: "1.125rem"
    },
});

const TeamlyticsHeader = () => {
    const classes = useClasses();

    return (
        <div className={classes.title}>
            Settings
        </div>
    );
};

export default TeamlyticsHeader;
