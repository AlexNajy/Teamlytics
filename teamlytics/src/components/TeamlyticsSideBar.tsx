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
} from "@/components/ui/sidebar";
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
} from "@/components/ui/dropdown-menu";

const useStyles = makeStyles({
    sidebar: {
        borderRight: "none",
    },
    content: {
        backgroundColor: "var(--card)",
        borderRight: "1px solid var(--border)",
        boxShadow: "2px 2px 4px 0px var(--shadow)",
    },
    header: {
        padding: "0.75rem",
        borderRight: "1px solid var(--border)",
        backgroundColor: "var(--card)",
    },
    companySelector: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.75rem",
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        backgroundColor: "var(--card)",
        cursor: "pointer",
        transition: "all 0.2s ease",
        width: "100%",
        boxShadow: "0px 1px 2px 1px var(--shadow)",

        ":hover": {
            backgroundColor: "var(--muted)",
        },
    },
    companyDropdown: {
        backgroundColor: 'var(--card)',
        color: 'var(--foreground)',
        border: '1px solid var(--border)',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)',
    },
    companyDropdownItem: {
        color: 'var(--foreground)',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        ':hover': {
            backgroundColor: 'var(--muted)',
        }
    },
    selected: {
        backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)',
        ':hover': {
            backgroundColor: 'color-mix(in srgb, var(--primary) 15%, transparent)',
        }
    },
    companyIcon: {
        width: "1.25rem",
        height: "1.25rem",
        borderRadius: "0.25rem",
        backgroundImage: 'linear-gradient(135deg, var(--primary), var(--secondary))',
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
    { name: "Acme Inc", id: "1" },
    { name: "TechCorp", id: "2" },
    { name: "Global Solutions", id: "3" },
];

const platformPages = [
    { title: "Home", url: "/", icon: Home },
    { title: "Tasks", url: "/tasks", icon: CheckSquareIcon },
    { title: "Team", url: "/team", icon: Users },
    { title: "Schedule", url: "/schedule", icon: ClockIcon },
    { title: "Settings", url: "/settings", icon: Settings },
];

const personalPages = [
    { title: "Account", url: "/account", icon: User },
    { title: "Settings", url: "/settings", icon: Settings },
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
                                <Building2 size={16} />
                            </div>

                            <div className={styles.companyInfo}>
                                <div className={styles.companyName}>{selectedCompany.name}</div>
                            </div>
                            <ChevronsUpDown size={16} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={styles.companyDropdown}>
                        {companies.map((company) => {
                            const isSelected = company.id === selectedCompany.id;
                            return (
                                <DropdownMenuItem
                                    key={company.name}
                                    onClick={() => setSelectedCompany(company)}
                                    className={`${styles.companyDropdownItem} ${isSelected ? styles.selected : ''}`}
                                >
                                    <div className={styles.companyIcon}>
                                        <Building2 size={12} />
                                    </div>
                                    <div>
                                        <div className={styles.companyName}>{company.name}</div>
                                        <div className={styles.companyType}>{company.id}</div>
                                    </div>
                                </DropdownMenuItem>
                            );
                        })}
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
                            {platformPages.slice(0, 4).map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className={styles.menuButton}>
                                        <NavLink to={item.url} className={styles.link}>
                                            <item.icon size={16} />
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className={styles.groupLabel}>
                        Personal
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {personalPages.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className={styles.menuButton}>
                                        <NavLink to={item.url} className={styles.link}>
                                            <item.icon size={16} />
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