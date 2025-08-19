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
        backgroundImage: "linear-gradient(to left, white, #f5f5f5)"
    },
    menuButton: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.75rem",
        borderRadius: "0.375rem", // rounded-md
        transition: "background 0.2s ease, color 0.2s ease",
        color: "black",

        ":hover": {
            backgroundImage: "linear-gradient(to right, #f3e8ff, #dbeafe)",
            color: "#7e22ce", // purple-700
        },

        '[data-state="open"]': {
            backgroundImage: "linear-gradient(to right, #f3e8ff, #dbeafe)",
            color: "#7e22ce",
        },
    },
    link: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        textDecoration: "none",
        color: "inherit",
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
        <Sidebar>
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
