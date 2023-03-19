import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, StarsCanvas, About, Techno, Projects, Contact} from "./components"

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-0">
          <Navbar/>
          <Hero/>
          <StarsCanvas />
        </div>
        <About/>
        <Techno />
        <Projects/>
        <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App
