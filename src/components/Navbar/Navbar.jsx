import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { FaHome } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoMdContact } from "react-icons/io";
import "./Navbar.css";
import logo from "../../assets/MyName.png";

function Navbar() {
    let location = useLocation();
    const navigate = useNavigate();
    const [menuClosed, setMenuClosed] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.11) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navigateToHome = () => {
        navigate("/");
    };

    const navigateToEdu = () => {
        navigate("/education");
    };

    const navigateToPro = () => {
        navigate("/projects");
    };

    const navigateToExp = () => {
        navigate("/experience");
    };

    const navigateToCont = () => {
        navigate("/contact");
    };

    const toggleMenu = () => {
        setMenuClosed(!menuClosed);
    };

    return (
        <>
            <div className={`navbar ${scrolled ? "hidden" : ""}`}>
                <div className={`${menuClosed ? "navbar__logo" : "navbar__logo-open"}`}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={`${menuClosed ? "navbar-list" : "navbar-list-open"}`}>
                    <CloseIcon className="cross" onClick={toggleMenu} />
                    <ul>
                        <li onClick={() => { setMenuClosed(true) }}><Link className={`${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
                        <li onClick={() => { setMenuClosed(true) }}><Link className={`${location.pathname === "/education" ? "active" : ""}`} to="/education">Education</Link></li>
                        <li onClick={() => { setMenuClosed(true) }}><Link className={`${location.pathname === "/projects" ? "active" : ""}`} to="/projects">Projects</Link></li>
                        <li onClick={() => { setMenuClosed(true) }}><Link className={`${location.pathname === "/experience" ? "active" : ""}`} to="/experience">Experience</Link></li>
                        <li onClick={() => { setMenuClosed(true) }}><Link className={`${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link></li>
                    </ul>
                    <MenuIcon className="menu" onClick={toggleMenu} />
                </div>
            </div>
            <div className={`navBar2 ${scrolled ? "" : "hidden"}`}>
                <div className="navbarContent">
                    <FaHome onClick={navigateToHome} className={`${location.pathname === "/" ? "active" : ""}`} />
                    <IoSchoolSharp onClick={navigateToEdu} className={`${location.pathname === "/education" ? "active" : ""}`} />
                    <AiFillProject onClick={navigateToPro} className={`${location.pathname === "/projects" ? "active" : ""}`} />
                    <HiBuildingOffice onClick={navigateToExp} className={`${location.pathname === "/experience" ? "active" : ""}`} />
                    <IoMdContact onClick={navigateToCont} className={`${location.pathname === "/contact" ? "active" : ""}`} />
                </div>
            </div>
        </>
    );
}

export default Navbar;
