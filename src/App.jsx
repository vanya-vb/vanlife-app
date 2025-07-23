import { Routes, Route } from "react-router"

import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/Layout"
import Vans from "./pages/Vans/Vans"
import VanDetails from "./pages/Vans/VanDetails"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"
import HostVans from "./pages/Host/HostVans"
import HostVanDetails from "./pages/Host/HostVanDetails"

import "../server"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetails />} />

        <Route path="host" element={<HostLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={< HostVans />} />
          <Route path="vans/:id" element={< HostVanDetails />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
