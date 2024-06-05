import "./Socials.css";
import { AiFillInstagram  } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Socials() {
    const handleGithub = () => {
        window.open("https://github.com/tanishqJain16")
    }

    const handleIg= () => {
        window.open("https://www.instagram.com/tanjan_16/")
    }

    const handleLinkedin = () => {
        window.open("https://www.linkedin.com/in/tanishq-jain-9a8bb022b/")
    }
  return (
    <div className="socials">
        <FaGithub onClick={handleGithub}/>
        <AiFillInstagram onClick={handleIg}/>
        <FaLinkedinIn onClick={handleLinkedin}/>
    </div>
  )
}

export default Socials
