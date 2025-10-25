import {makeStyles} from '@griffel/react';
import {useState, useEffect} from "react";
import {useGetUsers} from "@/Pages/TeamPage/hooks/GetUsers.tsx";
import type {CompletedUser} from "@/sdk";
import {ScrollArea} from "@/components/ui/scroll-area";
import UserCards from "./UserCards";
import UserView from "./UserView";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
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
        marginRight: '0.5rem',
        marginLeft: '0.5rem',
    },
    title: {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--foreground)',
    },
    scrollArea: {
        height: '100%',
    },
});

const UserList = () => {
    const styles = useStyles();
    const [selectedUser, setSelectedUser] = useState<CompletedUser | null>(null);
    const users = useGetUsers();

    useEffect(() => {
        if (!selectedUser || !users.data) return;

        const userExists = users.data.find(user => user.id === selectedUser.id);
        if (!userExists) {
            setSelectedUser(null);
        }
    }, [users.data]);

    if (users.data === undefined) {
        return <div>Loading...</div>;
    }


    return (
        <div className={styles.container}>
            <ScrollArea className={styles.scrollArea}>
                <div className={styles.listPanel}>
                    <UserCards users={users.data} onSelectUser={setSelectedUser}/>
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