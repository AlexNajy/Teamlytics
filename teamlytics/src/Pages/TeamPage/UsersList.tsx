import {makeStyles} from '@griffel/react';
import {useGetTeam} from "@/Pages/TeamPage/hooks/GetTeam.tsx";
import UserCard from "@/Pages/TeamPage/UserCards.tsx";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '1rem',
        width: '100%',
    },
    listPanel: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
    },
    detailPanel: {
        flex: 2,
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '0.5rem',
        padding: '1rem',
        boxShadow: "0px 4px 8px 4px var(--shadow)",
    },
    userCard: {
        display: "flex",
        flexDirection: "column",
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: '0.5rem',
        padding: '1rem',
    },
    avatarLarge: {
        width: '4rem',
        height: '4rem',
    },
    title: {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--foreground)',
    },
    subtext: {
        fontSize: '0.875rem',
        color: 'var(--muted-foreground)',
    },
});

const UsersList = () => {
    const styles = useStyles();
    const users = useGetTeam()
    if (users.data === undefined) {
        return <div>Loading...</div>
    }

    const user = users.data.map((user: any) => {
        return {
            id: user.id,
            role: user.role,
            first_name: user.first_name,
            last_name: user.last_name,
            context_field: user.context_field,
        }
    })

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.listPanel}>
                    {user.map(user => (
                        <UserCard key={user.id} user={user}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UsersList;