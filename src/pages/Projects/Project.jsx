import "./Project.css";
import jsrimg from "../../assets/jsr-img.png";
import myportfolioimg from "../../assets/myportfolio-img.png";
import sphurtiimg from "../../assets/sphurti-img.png";
import SmallCard from "../../components/SmallCard/SmallCard";
import Particlejs from "../../components/ParticleJs/Particlejs";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    ScrollReveal().reveal(".project__container__title",{delay: 500, duration: 1000 , origin: 'top', distance: '50px'});
    ScrollReveal().reveal(".project__container__card",{delay: 1000, duration: 1000 , origin: 'top', distance: '50px'});
  }, []);
  return (
    <div className="project">
      <Particlejs/>
      <div className="project__container">
        <h1 className="project__container__title">
          My <span>Projects</span>
        </h1>
        <div className="project__container__card">
          <SmallCard img={jsrimg} title={"JSR Forms"} github={"https://github.com/tanishqJain16/form-website"} link={"https://www.jsrforms.live/"} />
          <SmallCard img={sphurtiimg} title={"Sphurti'23"} github={"https://github.com/tanishqJain16/sphurtiWebsite2.0"} link={"https://ditusphurti.com/"} />
          <SmallCard img={myportfolioimg} title={"My Portfolio"} github={"https://github.com/tanishqJain16/MyPortfolio"} link={"https://my-portfolio-tanishqjain16.vercel.app/"} />
        </div>
      </div>
    </div>
  )
}

export default Project
