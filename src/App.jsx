import { BrowserRouter, Route, Routes } from "react-router-dom"
import Backgraound from "./Component/Backgraound"
import NavBar from "./Component/Navbar"
import Gallery from "./Component/Gallery"




function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Backgraound/>} />
      <Route path="/gallery" element={<Gallery/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
