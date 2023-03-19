import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, StarsCanvas, About, Tech, Projects, Contact} from "./components"

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
        <Tech/>
        <Projects/>
        <Contact/>

      </div>
    </BrowserRouter>
  )
}

export default App
