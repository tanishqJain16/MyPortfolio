import './App.css'
import Education from './pages/Education/Education'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Project'
import Experience from './pages/Experience/Experience'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'

function App() {
 

  return (
    <>
        <Navbar/>
        <Home/>
        <Education/>
        <Projects/>
        <Experience/>
        <Contact/>
    </>
  )
}

export default App
