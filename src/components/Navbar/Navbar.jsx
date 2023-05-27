import "./Navbar.css"
import logo from "../../assets/MyName.png"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react";

function Navbar() {
    let location = useLocation();
    const [menuClosed, setMenuClosed] = useState(true);

    const toggleMenu = () => {
        setMenuClosed(!menuClosed);
    }

    return (
        <div className="navbar">
            <div className={`${menuClosed?"navbar__logo":"navbar__logo-open"}`}>
                <img src={logo} alt="logo" />
            </div>
            <div  className={`${menuClosed?"navbar-list":"navbar-list-open"}`}>
            <i className="fa-solid fa-xmark cross" style={{color: "#ffffff;"}} onClick={toggleMenu}></i>
                <ul>
                    <li onClick={()=>{setMenuClosed(true)}}><Link className={`${location.pathname==="/"?"active":""}`} to="/">Home</Link></li>
                    {/* <li onClick={()=>{setMenuClosed(true)}}><Link className={`${location.pathname==="/about"?"active":""}`} to="/about">About</Link></li> */}
                    <li onClick={()=>{setMenuClosed(true)}}><Link className={`${location.pathname==="/education"?"active":""}`} to="/education">Education</Link></li>
                    <li onClick={()=>{setMenuClosed(true)}}><Link className={`${location.pathname==="/projects"?"active":""}`} to="/projects">Projects</Link></li>
                    <li onClick={()=>{setMenuClosed(true)}}><Link className={`${location.pathname==="/experience"?"active":""}`} to="/experience">Experience</Link></li>
                    <li onClick={()=>{setMenuClosed(true)}}><Link className={`${location.pathname==="/contact"?"active":""}`} to="/contact">Contact</Link></li>
                </ul>
                <i className="fa fa-burger fa-xl menu" style={{color: "#ffffff;",margin:"1rem"}} onClick={toggleMenu}></i>
            </div>
        </div>
    )
}

export default Navbar
