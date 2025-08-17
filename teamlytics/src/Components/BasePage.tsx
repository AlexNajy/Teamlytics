import TeamlyticsHeader from "./TeamlyticsHeader";
import TeamlyticsSideBar from "./TeamlyticsSideBar";
import { SidebarProvider } from "@/Components/ui/sidebar";

interface BasePageProps {
    children: React.ReactNode;
}

const BasePage = ({ children }: BasePageProps) => {
    return (
        <SidebarProvider>
            <div className="min-h-screen bg-gray-50">
                {/* Header at the top */}
                <TeamlyticsHeader />

                {/* Main content area with sidebar and content */}
                <div className="flex">
                    {/* Sidebar on the left */}
                    <TeamlyticsSideBar />

                    {/* Main content area */}
                    <main className="flex-1 p-6">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default BasePage;