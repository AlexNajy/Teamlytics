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
import {
    Home,
    Users,
    Settings,
    CheckSquareIcon,
    ClockIcon,
    User,
    Building2,
    ChevronsUpDown
} from "lucide-react";
import { makeStyles } from "@griffel/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

const useStyles = makeStyles({
    sidebar: {
        borderRight: "none !important",
    },
    content: {
        backgroundColor: "var(--card)",
        borderRight: "1px solid var(--border)",
        boxShadow: "0 4px 6px var(--shadow)",
    },
    header: {
        padding: "1rem",
        borderRight: "1px solid var(--border)",
        backgroundColor: "var(--card)",
    },
    companySelector: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.75rem",
        borderRadius: "var(--radius)",
        border: "2px solid var(--border)",
        backgroundColor: "var(--card)",
        cursor: "pointer",
        transition: "all 0.2s ease",
        width: "100%",

        ":hover": {
            backgroundColor: "var(--muted)",
        },
    },
    companyIcon: {
        width: "1.25rem",
        height: "1.25rem",
        borderRadius: "0.25rem",
        backgroundColor: "var(--primary)",
        color: "var(--card)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.75rem",
        fontWeight: "600",
    },
    companyInfo: {
        flex: 1,
        textAlign: "left",
    },
    companyName: {
        fontSize: "0.875rem",
        fontWeight: "600",
        color: "var(--foreground)",
    },
    companyType: {
        fontSize: "0.75rem",
        color: "var(--muted-foreground)",
    },
    groupLabel: {
        fontSize: "0.75rem",
        fontWeight: "600",
        color: "var(--muted-foreground)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        marginBottom: "0.5rem",
        paddingLeft: "0.75rem",
    },
    menuButton: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.5rem 0.75rem",
        borderRadius: "var(--radius)",
        transition: "all 0.2s ease",

        color: "var(--foreground)",
        fontSize: "0.875rem",
        width: "100%",

        ":hover": {
            backgroundColor: "var(--muted)",
        },
    },
    link: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        textDecoration: "none",
        color: "var(--foreground)",
        width: "100%",
    },
});

const companies = [
    { name: "Acme Inc", type: "Enterprise" },
    { name: "TechCorp", type: "Startup" },
    { name: "Global Solutions", type: "Enterprise" },
];

const TeamlyticsSideBar = () => {
    const styles = useStyles();
    const [selectedCompany, setSelectedCompany] = useState(companies[0]);

    return (
        <Sidebar className={styles.sidebar}>
            <SidebarHeader className={styles.header}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className={styles.companySelector}>
                            <div className={styles.companyIcon}>
                                <Building2 size={14} />
                            </div>
                            <div className={styles.companyInfo}>
                                <div className={styles.companyName}>{selectedCompany.name}</div>
                                <div className={styles.companyType}>{selectedCompany.type}</div>
                            </div>
                            <ChevronsUpDown size={16} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                        {companies.map((company) => (
                            <DropdownMenuItem
                                key={company.name}
                                onClick={() => setSelectedCompany(company)}
                            >
                                <div className="flex items-center gap-2">
                                    <div className={styles.companyIcon}>
                                        <Building2 size={12} />
                                    </div>
                                    <div>
                                        <div className="font-medium">{company.name}</div>
                                        <div className="text-sm text-muted-foreground">{company.type}</div>
                                    </div>
                                </div>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarHeader>

            <SidebarContent className={styles.content}>
                <SidebarGroup>
                    <SidebarGroupLabel className={styles.groupLabel}>
                        Platform
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild className={styles.menuButton}>
                                    <NavLink to="/" className={styles.link}>
                                        <Home size={16} />
                                        <span>Home</span>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild className={styles.menuButton}>
                                    <NavLink to="/tasks" className={styles.link}>
                                        <CheckSquareIcon size={16} />
                                        <span>Tasks</span>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild className={styles.menuButton}>
                                    <NavLink to="/team" className={styles.link}>
                                        <Users size={16} />
                                        <span>Team</span>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild className={styles.menuButton}>
                                    <NavLink to="/schedule" className={styles.link}>
                                        <ClockIcon size={16} />
                                        <span>Schedule</span>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className={styles.groupLabel}>
                        Personal
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild className={styles.menuButton}>
                                    <NavLink to="/account" className={styles.link}>
                                        <User size={16} />
                                        <span>Account</span>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild className={styles.menuButton}>
                                    <NavLink to="/settings" className={styles.link}>
                                        <Settings size={16} />
                                        <span>Settings</span>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default TeamlyticsSideBar;