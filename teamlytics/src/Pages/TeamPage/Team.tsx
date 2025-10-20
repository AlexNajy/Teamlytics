import { makeStyles } from '@griffel/react';
import UsersList from "@/Pages/TeamPage/UsersList.tsx";

const useClasses = makeStyles({
    container: {
        width: "100%",
        height: "100%",
        background: 'var(--background)',
        padding: "0.5rem",
    },
});

const Team = () => {
    const classes = useClasses();

    return (
        <div className={classes.container}>
            <UsersList/>
        </div>
    );
};

export default Team;
