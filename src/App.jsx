import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/Layout"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"

import "../server"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Route>
    </Routes>
  )
}

export default App
