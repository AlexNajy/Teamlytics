import { makeStyles } from "@griffel/react";
import TeamlyticsHeader from "./TeamlyticsHeader";
import TeamlyticsSideBar from "./TeamlyticsSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface BasePageProps {
    children: React.ReactNode;
    showAddTaskButton?: boolean;
    onAddTaskClick?: () => void;
}

const useClasses = makeStyles({
    root: {
        height: "100%",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        backgroundColor: "var(--background)",
    },
    content: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },
    main: {
        flex: 1,
        overflow: "auto",
        margin: 0,
    },
});


// includes header and sidebar on top of an empty page
const BasePage = ({ children, showAddTaskButton = false, onAddTaskClick }: BasePageProps) => {
    const classes = useClasses();

    return (
        <SidebarProvider>
            <div className={classes.root}>
                <TeamlyticsSideBar />

                <div className={classes.content}>
                    <TeamlyticsHeader
                        showAddTaskButton={showAddTaskButton}
                        onAddTaskClick={onAddTaskClick}
                    />

                    <main className={classes.main}>
                       {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default BasePage;