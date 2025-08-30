import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import TeamlyticsApp from "@/TeamlyticsApp.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <TeamlyticsApp />
        </BrowserRouter>
    </StrictMode>,
)