import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/Components/ui/sidebar";
import {Home, Users, Settings, CheckSquareIcon, ClockIcon} from "lucide-react";

// Menu items for the sidebar
const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: Home,
    },
    {
        title: "Tasks",
        url: "#",
        icon: CheckSquareIcon,
    },
    {
        title: "Team",
        url: "#",
        icon: Users,
    },
    {
        title: "Schedule",
        url: "#",
        icon: ClockIcon,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];

const TeamlyticsSideBar = () => {
    return (
        <Sidebar>
            <SidebarHeader>
                <h2 className="px-2 text-lg font-semibold text-sidebar-foreground">
                    Sidebar
                </h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default TeamlyticsSideBar;