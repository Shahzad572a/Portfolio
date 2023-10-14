import { useState } from 'react'
 
 
import {BrowserRouter,Router,Route} from 'react-router-dom'
 
import About from './component/About'
import Contact from './component/Contact'
import Hero from './component/Hero'
import Exprience from './component/Exprience'
import Feedback from './component/Feedback'
import Navbar from './component/Navbar'
import StarsCanvas from './component/canvas/stars'
 
import Teach from './component/Teach'
import reactLogo from './assets/logo.svg'
import Work from './component/work'


 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
       <div 
      style={{
        position: 'relative',
        zIndex: 0,
        backgroundImage: `url(${reactLogo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', 
      }}
       >
        <div className="bg-cover bg-no-repeat bg-center">
         <Navbar/>
         <Hero/>
       </div>
         <About/>
         <Exprience/>
         <Teach/>
         <Work />
         <Feedback/>
         <Contact/>
        </div>
        <div className="">
       
         <StarsCanvas/>
        </div>
        </BrowserRouter>
    </>
  )
}

export default App
