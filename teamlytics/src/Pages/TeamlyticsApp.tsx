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
    container: {
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem", // equivalent to Tailwind's space-y-4
    },
});

function TeamlyticsApp() {
    const classes = useClasses();

    return (
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
    );
}

export default TeamlyticsApp;