import {makeStyles} from '@griffel/react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

const useStyles = makeStyles({
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

interface User {
    id: string | number;
    role: string;
    first_name: string;
    last_name: string;
    context_field?: any;
}

interface UserViewProps {
    selectedUser: User;
}

const UserView = ({selectedUser}: UserViewProps) => {
    const styles = useStyles();

    return (
        <div className={styles.header}>
            <Avatar className={styles.avatarLarge}>
                <AvatarImage
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className={styles.title}>{selectedUser.first_name} {selectedUser.last_name}</div>
            <div className={styles.subtext}>{selectedUser.role}</div>
        </div>
    );
};

export default UserView;