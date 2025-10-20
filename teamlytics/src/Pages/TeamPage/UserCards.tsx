import {makeStyles} from '@griffel/react';
import {Card} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import type {CompletedUser} from "@/sdk";

const useStyles = makeStyles({
    userCard: {
        background: 'var(--card)',
        border: '1px solid var(--border)',
        boxShadow: "0px 2px 4px 2px var(--shadow)",
        borderRadius: '0.5rem',
        padding: '1rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
        ":hover": {
            boxShadow: "0px 4px 8px 4px var(--shadow)",
        }
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

interface UserCardsProps {
    users: CompletedUser[];
    onSelectUser: (user: CompletedUser) => void;
}

const UserCards = ({users, onSelectUser}: UserCardsProps) => {
    const styles = useStyles();

    const UserCard = ({user}: { user: User }) => {
        return (
            <Card className={styles.userCard} onClick={() => onSelectUser(user)}>
                <Avatar>
                    <AvatarImage
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className={styles.title}>{user.first_name} {user.last_name}</div>
                <div className={styles.subtext}>{user.role}</div>
            </Card>
        );
    };

    return (
        <>
            {users.map(user => (
                <UserCard key={user.id} user={user}/>
            ))}
        </>
    );
};

export default UserCards;