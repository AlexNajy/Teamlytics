import { SidebarTrigger } from "@/Components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";

const TeamlyticsHeader = () => {
    return (
        <header className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 shadow-sm border-b flex-shrink-0">
            <div className="flex items-center gap-4">

                <SidebarTrigger className="text-white hover:bg-purple-700 p-2 rounded-md" />

                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Teamlytics
                </h1>

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbSeparator className="text-blue-100" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-blue-100 text-lg">
                                Dashboard
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    );
};

export default TeamlyticsHeader;