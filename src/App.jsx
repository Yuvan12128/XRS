import { BrowserRouter, Route, Routes } from "react-router-dom"
import Backgraound from "./Component/Backgraound"
import NavBar from "./Component/Navbar"
import Gallery from "./Component/Gallery"
import Blog from "./Component/Blog"
import Contact from "./Component/Contact"




function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Backgraound/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
