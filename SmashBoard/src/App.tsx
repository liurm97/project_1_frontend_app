import { Route, Routes } from "react-router-dom"
import { MainBody } from "./components/custom/MainBody"
import { MainHeader } from "./components/custom/MainHeader"
import "./index.css"
import { Dashboard } from "./components/custom/Dashboard"
import { About } from "./components/custom/About"
import { BuyCoffee } from "./components/custom/BuyCoffee"
import { Contact } from "./components/custom/Contact"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<><MainHeader /><MainBody /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/coffee" element={<BuyCoffee />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  )
}

export default App
