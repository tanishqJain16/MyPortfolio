import "./Home.css";
import landingimg from "../../assets/landing-image.jpg"
import { TypeAnimation } from "react-type-animation";
import Particlejs from "../../components/ParticleJs/Particlejs";
import Socials from "../../components/Socials/Socials";
// import { Link } from "react-router-dom";
import AboutMe from "../../components/AboutMe/AboutMe";
import { Fade } from "react-awesome-reveal";

function Home() {
    const handleAboutMe = () => {
        window.scrollTo({ left: 0, top: 1000, behavior: "smooth" });
    }
    return (
        <div className="home">
            <Particlejs />
            <div className="homeLanding">
                <div className="home-left">
                    <Fade cascade className="fade" duration={2000} triggerOnce={true}>
                        <h1>{`Hi, I'm`}  <TypeAnimation
                            className="home-left__name--color"
                            sequence={[1000,
                                'Tanishq',
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={0}
                            style={{ display: 'inline-block' }}
                        /></h1>
                        <h2 className="home-left__subheading"><TypeAnimation
                            className="home-left__subheading--color"
                            sequence={[
                                1000,
                                `I'm a Web Developer`,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                        /></h2>
                        <div className="socials">
                            <Socials />
                        </div>
                        <div className="homeButtons">
                            <button className="cvbtn">
                                <a href="https://drive.google.com/file/d/1ESrN_tBnAOOCCQJ2PVkuU1p1SuQd1N91/view?usp=share_link" target="_blank" rel="noreferrer">
                                    View CV
                                </a>
                            </button>
                            <button className="aboutMeBtn" onClick={handleAboutMe}>About Me
                            </button>
                        </div>
                    </Fade>
                </div>
                <div className="home-right">
                    <Fade className="fade" duration={5000} delay={1000} triggerOnce={true}>
                        <img src={landingimg} alt="landing-img" className="home-right__img" />
                    </Fade>
                </div>
            </div>
            <div className="homeAbout">
                <AboutMe />
            </div>

        </div>
    )
}

export default Home
