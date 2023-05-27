import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contact from './pages/Contact/Contact'
import Project from './pages/Projects/Project'
import Education from './pages/Education/Education'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Experience from './pages/Experience/Experience'

function App() {

  return (
    <>
     <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/experience" element={<Experience/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
