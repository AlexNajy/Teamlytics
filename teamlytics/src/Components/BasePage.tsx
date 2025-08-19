import { makeStyles } from "@griffel/react";
import TeamlyticsHeader from "./TeamlyticsHeader";
import TeamlyticsSideBar from "./TeamlyticsSideBar";
import { SidebarProvider } from "@/Components/ui/sidebar";

interface BasePageProps {
    children: React.ReactNode;
}

const useClasses = makeStyles({
    container: {
        minHeight: "100vh",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
    },
    mainContentWrapper: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    mainContent: {
        flex: 1,
        backgroundColor: "#f9fafb", // bg-gray-50
        overflow: "auto",
        margin: 0,
    },
    innerContent: {
        maxWidth: "112rem", // max-w-7xl
        marginLeft: "auto",
        marginRight: "auto",
    },
});

const BasePage = ({ children }: BasePageProps) => {
    const classes = useClasses();

    return (
        <SidebarProvider>
            <div className={classes.container}>
                <TeamlyticsSideBar />

                <div className={classes.mainContentWrapper}>
                    <TeamlyticsHeader />

                    <main className={classes.mainContent}>
                        <div className={classes.innerContent}>{children}</div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default BasePage;
