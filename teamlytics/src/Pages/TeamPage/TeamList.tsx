import {makeStyles} from '@griffel/react';
import {Card} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useState} from "react";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '1rem',
        width: '100%',
        height: '50vh',
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

const TeamList = () => {
    const styles = useStyles();
    const [selectedEmployee, setSelectedEmployee] = useState<any | null>(null);

    const employees = [
        {
            id: 1,
            name: "Santiago Fernandez",
            role: "Venture Capitalist",
            contextField: "Can't speak English"
        },
        {
            id: 2,
            name: "Luke Duncan",
            role: "Backend Developer",
            contextField: "Has no chipping game"
        },
        {
            id: 3,
            name: "Alex Najy",
            role: "Frontend Developer",
            contextField: "Is good at everything"
        },
        {
            id: 4,
            name: "Arshya Ghasemi",
            role: "Engineer",
            contextField: "Will leave after every month to China"
        }
    ];

    const FullView = ({selectedEmployee}: { selectedEmployee: any }) => {
        const styles = useStyles();

        return (
            <div className={styles.header}>
                <Avatar className={styles.avatarLarge}>
                    <AvatarImage
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className={styles.title}>{selectedEmployee.name}</div>
                <div className={styles.subtext}>{selectedEmployee.role}</div>
            </div>
        );
    };

    const EmployeeCard = ({employee}: { employee: any }) => {
        const styles = useStyles();

        return (
            <Card className={styles.employeeCard} onClick={() => setSelectedEmployee(employee)}>
                <Avatar>
                    <AvatarImage
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className={styles.title}>{employee.name}</div>
                <div className={styles.subtext}>{employee.role}</div>
            </Card>
        );
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.listPanel}>
                    {employees.map(employee => (
                        <EmployeeCard key={employee.id} employee={employee}/>
                    ))}
                </div>
                <div className={styles.detailPanel}>
                    {selectedEmployee ? (
                        <FullView selectedEmployee={selectedEmployee} />
                    ) : (
                        <div className={styles.title}>Select an employee</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamList;