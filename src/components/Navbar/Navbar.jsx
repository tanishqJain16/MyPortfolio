import "./Navbar.css"
import logo from "../../assets/MyName.png"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
    let location = useLocation();
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-list">
                <ul>
                    <li><Link className={`${location.pathname==="/"?"active":""}`} to="/">Home</Link></li>
                    <li><Link className={`${location.pathname==="/about"?"active":""}`} to="/about">About</Link></li>
                    <li><Link className={`${location.pathname==="/education"?"active":""}`} to="/education">Education</Link></li>
                    <li><Link className={`${location.pathname==="/projects"?"active":""}`} to="/projects">Projects</Link></li>
                    <li><Link className={`${location.pathname==="/contact"?"active":""}`} to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
