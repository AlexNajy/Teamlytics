import {makeStyles} from '@griffel/react';
import {Card} from "@/Components/ui/card";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
    },
    employeeCard: {
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
    avatar: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        display: 'flex',
        fontSize: '1.25rem',
        fontWeight: '600',
        backgroundColor: 'var(--primary-transparent)',
        flexShrink: '0',
    },
    name: {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--foreground)',
        minWidth: '120px',
    },
    role: {
        fontSize: '0.875rem',
        color: 'var(--muted-foreground)',
    },
    currentTask: {
        fontSize: '0.875rem',
        color: 'var(--foreground)',
        flex: '1',
    },
});

const EmployeeCard = ({employee}: { employee: any }) => {
    const styles = useStyles();

    return (
        <Card className={styles.employeeCard}>
            <div className={styles.avatar}>
            </div>
            <div className={styles.name}>{employee.name}</div>
            <div className={styles.role}>{employee.role}</div>
            <div className={styles.currentTask}>{employee.currentTask}</div>
        </Card>
    );
};

const TeamList = () => {
    const styles = useStyles();

    // Hardcoded employee data
    const employees = [
        {
            id: 1,
            name: "Santiago Fernandez",
            role: "Venture Capitalist",
            currentTask: "Leveraging financial risk"
        },
        {
            id: 2,
            name: "Luke Duncan",
            role: "Backend Developer",
            currentTask: "Make the backend better"
        },
        {
            id: 3,
            name: "Alex Najy",
            role: "Frontend Developer",
            currentTask: "Designing mobile responsive layouts"
        }
    ];

    return (
        <div>
            <div className={styles.container}>
                {employees.map(employee => (
                    <EmployeeCard key={employee.id} employee={employee}/>
                ))}
            </div>
        </div>
    );
};

export default TeamList;