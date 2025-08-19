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
        backgroundImage: "linear-gradient(to right, #9333ea, #2563eb)",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
        borderBottom: "1px solid #e5e7eb",
        flexShrink: 0,
        borderBottomLeftRadius: "0.375rem",
        borderBottomRightRadius: "0.375rem"
    },
    container: {
        display: "flex",
        alignItems: "baseline",
        gap: "1rem", // gap-4
    },
    title: {
        fontSize: "1.25rem", // text-xl
        fontWeight: "bold",
        backgroundImage: "linear-gradient(to right, white, #dbeafe)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    sidebarTrigger: {
        color: "white",
        padding: "0.5rem", // p-2
        borderRadius: "0.375rem", // rounded-md
        ":hover": {
            backgroundColor: "#7e22ce", // purple-700
        },
    },
    breadcrumbSeparator: {
        color: "#dbeafe",
    },
    breadcrumbText: {
        color: "#dbeafe",
        fontSize: "1.125rem", // text-lg
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