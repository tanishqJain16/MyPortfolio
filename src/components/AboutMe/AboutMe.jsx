import "./AboutMe.css"
import aboutImg from "../../assets/aboutMe.jpeg"
import { useNavigate } from "react-router-dom"
import { Fade } from "react-awesome-reveal";

function AboutMe() {
    const navigate = useNavigate();
    const handleContactMe = () => {
        navigate("/contact");
    }
    return (
        <div className="aboutMe">
            <div className="aboutMeLeft">
                <Fade className="fade" duration={2000} triggerOnce={true} delay={500} cascade>
                    <div className="aboutMeLeft__img">
                        <img src={aboutImg} alt="aboutme-img" />
                    </div>
                </Fade>
            </div>
            <div className="aboutMeRight">
                <Fade className="fade" duration={2000} triggerOnce={true} delay={1000} cascade>
                    <div className="aboutHeading">
                        <h1><span>About</span> Me</h1>
                    </div>
                    <div className="aboutMeRight__content">
                        <p>
                            I am a 3rd year student pursuing B.Tech in Computer Science and Engineering from DIT University, Dehradun. I am a <span>Full Stack Developer</span> with good knowledge of <span>Frontend</span> and <span>Backend</span> techniques. I love spending time on <span>fixing little details</span> and <span>optimizing</span> web apps. Also I like working in a <span>team</span> and <span>collaborating</span> with people.
                        </p>
                        <button className="contactMeBtn" onClick={handleContactMe}>
                            Contact Me
                        </button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default AboutMe
