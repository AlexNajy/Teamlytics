import { makeStyles } from '@griffel/react';
import UserList from "@/Pages/TeamPage/UserList.tsx";

const useClasses = makeStyles({
    container: {
        width: "100%",
        height: "100%",
        background: 'var(--secondary)',
        padding: "0.5rem",
    },
});

const Team = () => {
    const classes = useClasses();

    return (
        <div className={classes.container}>
            <UserList/>
        </div>
    );
};

export default Team;
