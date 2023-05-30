import "./AboutMe.css"
import aboutImg from "../../assets/aboutMe.jpeg"

function AboutMe() {
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
                    <button className="contactMeBtn">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
