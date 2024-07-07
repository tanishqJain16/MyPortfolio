import "./Navbar.css";
import logo from "../../assets/MyName.png";
import { useEffect, useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-scroll';
import { FaHome } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoMdContact } from "react-icons/io";

function Navbar() {
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
                        <li onClick={() => { setMenuClosed(true) }}>
                            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li onClick={() => { setMenuClosed(true) }}>
                            <Link activeClass="active" to="education" spy={true} smooth={true} duration={500}>
                                Education
                            </Link>
                        </li>
                        <li onClick={() => { setMenuClosed(true) }}>
                            <Link activeClass="active" to="project" spy={true} smooth={true} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li onClick={() => { setMenuClosed(true) }}>
                            <Link activeClass="active" to="experience" spy={true} smooth={true} duration={500}>
                                Experience
                            </Link>
                        </li>
                        <li onClick={() => { setMenuClosed(true) }}>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <MenuIcon className="menu" onClick={toggleMenu} />
                </div>
            </div>
            <div className={`navBar2 ${scrolled ? "" : "hidden"}`}>
                <div className="navbarContent">
                    <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
                        <FaHome className="navIcon" />
                    </Link>
                    <Link to="education" activeClass="active" spy={true} smooth={true} duration={500}>
                        <IoSchoolSharp className="navIcon" />
                    </Link>
                    <Link to="project" activeClass="active" spy={true} smooth={true} duration={500}>
                        <AiFillProject className="navIcon" />
                    </Link>
                    <Link to="experience" activeClass="active" spy={true} smooth={true} duration={500}>
                        <HiBuildingOffice className="navIcon" />
                    </Link>
                    <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
                        <IoMdContact className="navIcon" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
