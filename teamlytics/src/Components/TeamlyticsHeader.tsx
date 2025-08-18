import { SidebarTrigger } from "@/Components/ui/sidebar";

const TeamlyticsHeader = () => {
    return (
        <header className="w-full bg-blue-600 px-6 py-4 shadow-sm border-b">
            <div className="flex items-center gap-4">
                {/* Sidebar trigger button */}
                <SidebarTrigger className="text-white hover:bg-blue-700" />

                <h1 className="text-2xl font-bold text-white">
                    Teamlytics Header
                </h1>
            </div>
        </header>
    );
};

export default TeamlyticsHeader;