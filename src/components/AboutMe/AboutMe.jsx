import "./AboutMe.css"
import aboutImg from "../../assets/aboutMe.jpeg"
import { useNavigate } from "react-router-dom"
// import { Fade } from "react-awesome-reveal";
import ScrollReveal from "scrollreveal";

function AboutMe() {
    const navigate = useNavigate();
    const handleContactMe = () => {
        navigate("/contact");
    }
    ScrollReveal().reveal('.aboutMeLeft' , {delay: 500, duration: 1000});
    ScrollReveal().reveal('.aboutHeading' , {delay: 1000, duration: 1000});
    ScrollReveal().reveal('.aboutMeRight__content' , {delay: 1500, duration: 1000});
    ScrollReveal().reveal('.contactMeBtn' , {delay: 2000, duration: 1000});
    return (
        <div className="aboutMe">
            <div className="aboutMeLeft">
                    <div className="aboutMeLeft__img">
                        <img src={aboutImg} alt="aboutme-img" />
                    </div>
            </div>
            <div className="aboutMeRight">
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
            </div>
        </div>
    )
}

export default AboutMe
