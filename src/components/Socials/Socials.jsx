import "./Socials.css";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import ig from "../../assets/ig.png"

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
        <img src={github} alt="" onClick={handleGithub}/>
        <img src={ig} alt="" onClick={handleIg}/>
        <img src={linkedin} alt="" onClick={handleLinkedin}/>
    </div>
  )
}

export default Socials
