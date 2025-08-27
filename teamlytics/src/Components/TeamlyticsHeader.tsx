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
        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
        borderBottom: '1px solid var(--border)',
        flexShrink: 0,
        borderBottomLeftRadius: "0rem",
        borderBottomRightRadius: "0rem"
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
        color: "var(--muted-foreground)",
        fontSize: "1.125rem",
    }
});

const routeNames: Record<string, string> = {
    '/': 'Home',
    '/tasks': 'Tasks',
    '/team': 'Team',
    '/schedule': 'Schedule',
    '/settings': 'Settings',
};

const TeamlyticsHeader = () => {
    const classes = useClasses();
    const location = useLocation();
    const currentPage = routeNames[location.pathname] || 'Unknown';


    return (
        <header className={classes.header}>
            <div className={classes.container}>

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
        </header>
    );
};

export default TeamlyticsHeader;