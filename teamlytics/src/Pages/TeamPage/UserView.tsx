import {makeStyles} from '@griffel/react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import type {CompletedUser} from "@/sdk";
import {Trash} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {useDeleteUser} from "@/Pages/TeamPage/hooks/DeleteUser.tsx";

const useStyles = makeStyles({
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        width: '100%',
        gap: '0.5rem',
    },
    poster: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: '0.5rem',
        padding: '0.5rem',
    },
    avatarLarge: {
        width: '4rem',
        height: '4rem',
    },
    deleteButton: {
        color: "var(--muted-foreground)",
        padding: "0.5rem",
        borderRadius: "0.375rem",
        boxShadow: "none",
        alignItems: "right",
        ":hover": {
            backgroundColor: "var(--muted)",
        },
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

interface UserViewProps {
    selectedUser: CompletedUser;
}

const UserView = ({selectedUser}: UserViewProps) => {
    const styles = useStyles();
    const deleteUser = useDeleteUser();

    return (
        <div>
            <div className={styles.header}>
                <Button
                    className={styles.deleteButton}
                    onClick={() => deleteUser.mutate(selectedUser.id)}
                >
                    <Trash size={16}> </Trash>
                </Button>
            </div>
            <div className={styles.poster}>
                <Avatar className={styles.avatarLarge}>
                    <AvatarImage
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className={styles.title}>{selectedUser.first_name} {selectedUser.last_name}</div>
                <div className={styles.subtext}>{selectedUser.role}</div>
            </div>
        </div>
    );
};

export default UserView;