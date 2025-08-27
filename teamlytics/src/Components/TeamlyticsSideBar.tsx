import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/Components/ui/sidebar";
import { Home, Users, Settings, CheckSquareIcon, ClockIcon } from "lucide-react";
import { makeStyles } from "@griffel/react";
import { NavLink } from "react-router-dom";

const useClasses = makeStyles({
    container: {
        backgroundColor: "var(--card)",
        height: "100%",
        borderRight: '1px solid var(--border)',
    },
    menuButton: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.75rem",
        borderRadius: "0.375rem",
        transition: "background 0.2s ease, color 0.2s ease",
        color: "var(--foreground)",

        ":hover": {
            backgroundImage: 'linear-gradient(to right, var(--primary-transparent), var(--secondary-transparent))',
            color: "var(--foreground)",
            opacity: '0.75',
        },
    },
    link: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        color: "var(--foreground)",
    },
});

const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "Tasks", url: "/tasks", icon: CheckSquareIcon },
    { title: "Team", url: "/team", icon: Users },
    { title: "Schedule", url: "/schedule", icon: ClockIcon },
    { title: "Settings", url: "/settings", icon: Settings },
];

const TeamlyticsSideBar = () => {
    const classes = useClasses();

    return (
        <Sidebar style={{ borderRight: 'none' }}>
            <SidebarContent className={classes.container}>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className={classes.menuButton}>
                                        <NavLink to={item.url} className={classes.link}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </NavLink>
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
