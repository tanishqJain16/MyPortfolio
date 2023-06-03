import "./Home.css";
import landingimg from "../../assets/landing-image.jpg"
import { TypeAnimation } from "react-type-animation";
import Particlejs from "../../components/ParticleJs/Particlejs";
import Socials from "../../components/Socials/Socials";
import AboutMe from "../../components/AboutMe/AboutMe";
import ScrollReveal from "scrollreveal";
// import { Fade } from "react-awesome-reveal";

function Home() {
    let pageHeight = window.innerHeight;
    // let scrollDistance = document.documentElement.clientHeight;
    const handleAboutMe = () => {
        window.scrollTo({ left: 0, top: pageHeight, behavior: "smooth" });
    }

    ScrollReveal().reveal('.socials' , {delay: 500, duration: 1000, origin: 'top', distance: '50px'});
    ScrollReveal().reveal('.homeButtons' , {delay: 1000, duration: 1000, origin: 'bottom', distance: '50px'});
    ScrollReveal().reveal('.home-right__img' , {delay: 1500, duration: 1000, origin: 'bottom', distance: '50px'});

    return (
        <div className="home">
            <Particlejs />
            <div className="homeLanding">
                <div className="home-left">
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
                </div>
                <div className="home-right">
                        <img src={landingimg} alt="landing-img" className="home-right__img" />
                </div>
            </div>
            <div className="homeAbout">
                <AboutMe />
            </div>

        </div>
    )
}

export default Home
