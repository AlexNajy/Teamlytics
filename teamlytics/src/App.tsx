import './App.css'
import TeamlyticsHeader from "./Components/TeamlyticsHeader.tsx";
import {Button} from "@/Components/ui/button.tsx";
import TeamlyticsSideBar from "@/Components/TeamlyticsSideBar.tsx";

function App() {

  return (
    <div style={{
        height: "100vh",
        width: "100%",
        background: "red",
    }}>
        <TeamlyticsHeader></TeamlyticsHeader>
        <Button variant="outline">Button</Button>
        <TeamlyticsSideBar></TeamlyticsSideBar>
    </div>
  )
}

export default App
