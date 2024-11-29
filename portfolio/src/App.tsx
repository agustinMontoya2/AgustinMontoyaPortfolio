import AboutMe from "./views/AboutMe/AboutMe"
import Contact from "./views/Contact/Contact"
import Footer from "./views/Footer/Footer"
import Header from "./views/Header/Header"
import Proyects from "./views/Proyects/Proyects"
import Skills from "./views/Skills/Skills"


function App() {

  return (
    <div>
      
      <Header/>
      
    <AboutMe/>
    <Proyects/>
    <Skills/> 
    <Contact/>
    <Footer/>
    </div>
    )
}

export default App
