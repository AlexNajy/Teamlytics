import { SidebarTrigger } from "@/Components/ui/sidebar";
import { makeStyles } from '@griffel/react';
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
    breadcrumb: {
        color: "#dbeafe",
        fontSize: "1.125rem", // text-lg
    },
});

const TeamlyticsHeader = () => {
    const classes = useClasses();

    return (
        <header className={classes.header}>
            <div className={classes.container}>

                <SidebarTrigger className={classes.sidebarTrigger} />

                <h1 className={classes.title}>
                    Teamlytics
                </h1>

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbSeparator className={classes.breadcrumb} />
                        <BreadcrumbItem>
                            <BreadcrumbPage className={classes.breadcrumb}>
                                Home
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    );
};

export default TeamlyticsHeader;