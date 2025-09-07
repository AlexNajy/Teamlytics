import { SidebarTrigger } from "@/Components/ui/sidebar";
import { makeStyles } from '@griffel/react';
import { useLocation } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";

const useClasses = makeStyles({
    header: {
        width: "100%",
        backgroundColor: 'var(--card)',
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        boxShadow: "0 2px 4px var(--shadow)",
        borderBottom: '1px solid var(--border)',
        flexShrink: 0,
        borderBottomLeftRadius: "0rem",
        borderBottomRightRadius: "0rem",
        zIndex: 1,

    },
    container: {
        display: "flex",
        alignItems: "baseline",
        gap: "1rem",
    },
    title: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        color:"transparent",
        backgroundImage: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        opacity: '0.9',
    },
    sidebarTrigger: {
        color: "var(--foreground)",
        padding: "0.5rem",
        borderRadius: "0.375rem",
        ":hover": {
            backgroundColor: "var(--muted)",
        },
    },
    breadcrumbSeparator: {
        color: "var(--muted-foreground)",
    },
    breadcrumbText: {
        color: "var(--foreground)",
        fontSize: "1.125rem",
    },
    addTaskButton: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.1rem 0.75rem",
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        backgroundColor: "var(--card)",
        color: "var(--foreground)",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: "0px 1px 2px 1px var(--shadow)",

        ":hover": {
            backgroundColor: "var(--muted)",
        },
    },
    leftSection: {
        display: "flex",
        alignItems: "baseline",
        gap: "1rem",
        flex: 1,
    },
});

const routeNames: Record<string, string> = {
    '/': 'Home',
    '/tasks': 'Tasks',
    '/add-task': 'Add Task',
    '/team': 'Team',
    '/schedule': 'Schedule',
    '/settings': 'Settings',
};

interface TeamlyticsHeaderProps {
    showAddTaskButton?: boolean;
    onAddTaskClick?: () => void;
}

const TeamlyticsHeader = ({ showAddTaskButton = false, onAddTaskClick }: TeamlyticsHeaderProps) => {
    const classes = useClasses();
    const location = useLocation();
    const currentPage = routeNames[location.pathname] || 'Unknown';


    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.leftSection}>
                    <SidebarTrigger className={classes.sidebarTrigger} />

                    <h1 className={classes.title}>
                        Teamlytics
                    </h1>

                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbSeparator className={classes.breadcrumbSeparator} />
                            <BreadcrumbItem>
                                <BreadcrumbPage className={classes.breadcrumbText}>
                                    {currentPage}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {showAddTaskButton && (
                    <button
                        className={classes.addTaskButton}
                        onClick={onAddTaskClick}
                    >
                        <span>+</span>
                        Add Task
                    </button>
                )}
            </div>
        </header>
    );
};

export default TeamlyticsHeader;