import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/Components/ui/sidebar";
import {Home, Users, Settings, CheckSquareIcon, ClockIcon} from "lucide-react";

// Menu items for the sidebar
const items = [
    {
        title: "Home",
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
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 hover:text-purple-700 data-[state=open]:bg-gradient-to-r data-[state=open]:from-purple-100 data-[state=open]:to-blue-100"
                                    >
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