import './App.css'
import TeamlyticsHeader from "./Components/TeamlyticsHeader.tsx";
import {Button} from "@/Components/ui/button.tsx";

function App() {

  return (
    <div>
        <TeamlyticsHeader></TeamlyticsHeader>
        <Button variant="outline">Button</Button>
    </div>
  )
}

export default App
