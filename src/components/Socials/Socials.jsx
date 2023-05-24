import "./Socials.css";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import ig from "../../assets/ig.png"

function Socials() {
  return (
    <div className="socials">
        <img src={github} alt="" />
        <img src={ig} alt="" />
        <img src={linkedin} alt="" />
    </div>
  )
}

export default Socials
