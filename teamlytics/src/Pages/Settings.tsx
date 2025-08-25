import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
    title: {
        fontSize: "1.125rem"
    },
});

const Settings = () => {
    const classes = useClasses();

    return (
        <div className={classes.title}>
            Settings
        </div>
    );
};

export default Settings;
