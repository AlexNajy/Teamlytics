import {makeStyles} from '@griffel/react';
import {useState} from "react";
import {useGetTeam} from "@/Pages/TeamPage/hooks/GetUsers.tsx";
import type {CompletedUser} from "@/sdk";
import {ScrollArea} from "@/components/ui/scroll-area";
import UserCards from "./UserCards";
import UserView from "./UserView";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '1rem',
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow',
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
    title: {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--foreground)',
    },
    scrollArea: {
        backgroundColor: 'var(--primary)',
        height: '100%',
    },
});

const UserList = () => {
    const styles = useStyles();
    const [selectedUser, setSelectedUser] = useState<CompletedUser | null>(null);
    const users = useGetTeam();

    if (users.data === undefined) {
        return <div>Loading...</div>;
    }

    const user = users.data.map((user: any) => {
        return {
            id: user.id,
            role: user.role,
            first_name: user.first_name,
            last_name: user.last_name,
            context_field: user.context_field,
        };
    });

    return (
        <div className={styles.container}>
            <ScrollArea className={styles.scrollArea}>
                <div className={styles.listPanel}>
                    <UserCards users={user} onSelectUser={setSelectedUser}/>
                </div>
            </ScrollArea>
            <div className={styles.detailPanel}>
                {selectedUser ? (
                    <UserView selectedUser={selectedUser}/>
                ) : (
                    <div className={styles.title}>Select a user</div>
                )}
            </div>
        </div>
    );
};

export default UserList;