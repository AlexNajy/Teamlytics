import './App.css';
import BasePage from "@/components/BasePage.tsx";
import {makeStyles} from "@griffel/react";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

import Home from "./Pages/Home.tsx";
import Tasks from "./Pages/TasksPage/Tasks.tsx";
import AddTask from "@/Pages/TasksPage/AddTask.tsx";
import Team from "./Pages/TeamPage/Team.tsx";
import Schedule from "./Pages/Schedule.tsx";
import Settings from "./Pages/Settings.tsx";
import {Toaster} from "sonner";

const useClasses = makeStyles({
    background: {
        backgroundColor: "var(--background)",
        position: "fixed"
    }
});

document.documentElement.setAttribute('data-theme', 'root');
document.documentElement.classList.toggle('white');

function TeamlyticsApp() {
    const classes = useClasses();
    const location = useLocation();
    const navigate = useNavigate();

    const isTasksPage = location.pathname === '/tasks';
    const isTeamPage = location.pathname === '/team';

    console.log('Current path:', location.pathname);
    console.log('isTasksPage:', isTasksPage);
    console.log('isTeamPage:', isTeamPage);


    let addButtonLabel: string | undefined;
    let handleAddClick: (() => void) | undefined;

    if (isTasksPage) {
        addButtonLabel = "Add Task";
        handleAddClick = () => navigate('/add-task');
    } else if (isTeamPage) {
        addButtonLabel = "Add User";
        handleAddClick = () => navigate('/add-user');
    }

    console.log('addButtonLabel:', addButtonLabel);

    return (
        <div className={classes.background}>
            <BasePage
                addButtonLabel={addButtonLabel}
                onAddButtonClick={handleAddClick}
            >
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tasks" element={<Tasks/>}/>
                    <Route path="/add-task" element={<AddTask/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/schedule" element={<Schedule/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </BasePage>
            <Toaster position="top-center"/>
        </div>

    );
}

export default TeamlyticsApp;