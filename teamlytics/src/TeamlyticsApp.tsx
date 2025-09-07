import './App.css';
import BasePage from "./Components/BasePage.tsx";
import { makeStyles } from "@griffel/react";
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from "./Pages/Home.tsx";
import Tasks from "./Pages/Tasks.tsx";
import AddTask from "./Pages/IssuesPage/AddTask.tsx";
import Team from "./Pages/Team.tsx";
import Schedule from "./Pages/Schedule.tsx";
import Settings from "./Pages/Settings.tsx";

const useClasses = makeStyles({
    background: {
        backgroundColor: "var(--background)",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
    },
});

document.documentElement.setAttribute('data-theme', 'root');
document.documentElement.classList.toggle('light');

function TeamlyticsApp() {
    const classes = useClasses();
    const location = useLocation();

    const isTasksPage = location.pathname === '/tasks';

    const handleAddTaskClick = () => {
        window.location.href = '/add-task';
    };

    return (
        <div className={classes.background}>
            <BasePage
                showAddTaskButton={isTasksPage}
                onAddTaskClick={handleAddTaskClick}
            >
                <div className={classes.container}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/add-task" element={<AddTask />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </BasePage>
        </div>
    );
}

export default TeamlyticsApp;