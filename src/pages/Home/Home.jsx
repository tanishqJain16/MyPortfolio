import "./Home.css";
import landingimg from "../../assets/landing-image.jpg"
import { TypeAnimation } from "react-type-animation";
import Particlejs from "../../components/ParticleJs/Particlejs";
import Socials from "../../components/Socials/Socials";

function Home() {
    return (
        <div className="home">
            <Particlejs />
            <div className="home-left">
                <h1>{`Hi, I'm`}  <TypeAnimation
                    className="home-left__name--color"
                    sequence={[
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
                    <Socials/>
                </div>
            </div>
            <div className="home-right">
                <img src={landingimg} alt="landing-img" className="home-right__img" />
            </div>
        </div>
    )
}

export default Home
