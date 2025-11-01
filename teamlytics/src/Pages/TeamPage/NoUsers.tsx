import {makeStyles} from "@griffel/react";

const useStyles = makeStyles({
    container: {
        backgroundColor: 'var(--background)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    card: {
        width: '50%',
        height: '50%',
        background: 'var(--card)',
        borderRadius: '1rem',
        boxShadow: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)',
        border: '1px solid var(--border)',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
    },
    title: {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'var(--foreground)',
    },
    label: {
        fontSize: '0.875rem',
        fontWeight: '600',
        color: 'var(--foreground)',
    },
    subText: {
        fontSize: '0.875rem',
        fontWeight: '450',
        color: 'var(--muted-foreground)',
        textAlign: 'left',
    }
});

const AddUser = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.title}>
                     You Have No Users
                </div>
                <div className={styles.subText}>
                    Please create a user to view this page.
                </div>
            </div>
        </div>
    )
};

export default AddUser;