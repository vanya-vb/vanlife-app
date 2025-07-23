import { Routes, Route, Link } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"

import "../server"
import Vans from "./pages/Vans"

function App() {

  return (
    <>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </>
  )
}

export default App
