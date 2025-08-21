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
        //backgroundImage: "linear-gradient(to right, #a958f5, #3f75eb)",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
        borderBottom: "1px solid #e5e7eb",
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
        backgroundImage: "linear-gradient(to right, #111827, #111827)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    sidebarTrigger: {
        color: "black",
        padding: "0.5rem", // p-2
        borderRadius: "0.375rem", // rounded-md
        ":hover": {
            backgroundColor: "lightgray",
        },
    },
    breadcrumbSeparator: {
        color: "gray",
    },
    breadcrumbText: {
        color: "gray",
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