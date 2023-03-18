import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, StarsCanvas} from "./components"

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-0">
          <Navbar/>
          <Hero/>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
