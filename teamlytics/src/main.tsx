import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TeamlyticsApp from "@/Pages/TeamlyticsApp.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TeamlyticsApp />
  </StrictMode>,
)
