import '../App.css';
import BasePage from "../Components/BasePage";
import { makeStyles } from "@griffel/react";
import { Routes, Route } from 'react-router-dom';

import Home from "./Home";
import Tasks from "./Tasks";
import Team from "./Team";
import Schedule from "./Schedule";
import Settings from "./Settings";

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
document.documentElement.classList.toggle('dark');

function TeamlyticsApp() {
    const classes = useClasses();

    return (
        <div className={classes.background}>
            <BasePage>
                <div className={classes.container}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tasks" element={<Tasks />} />
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