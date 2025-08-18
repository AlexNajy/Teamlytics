import TeamlyticsHeader from "./TeamlyticsHeader";
import TeamlyticsSideBar from "./TeamlyticsSideBar";
import { SidebarProvider } from "@/Components/ui/sidebar";

interface BasePageProps {
    children: React.ReactNode;
}

const BasePage = ({ children }: BasePageProps) => {
    return (
        <SidebarProvider>
            <div className="min-h-screen h-screen flex w-screen fixed inset-0">
                {/* Sidebar - overlays everything */}
                <TeamlyticsSideBar />

                {/* Main content area - takes full remaining space */}
                <div className="flex-1 flex flex-col h-full">
                    {/* Header - part of main content */}
                    <TeamlyticsHeader />

                    {/* Main content */}
                    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
                        <div className="max-w-7xl mx-auto">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default BasePage;