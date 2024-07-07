import "./Project.css";
import jsrimg from "../../assets/jsr-img.png";
import myportfolioimg from "../../assets/myportfolio-img.png";
import sphurtiimg from "../../assets/sphurti-img.png";
import newsappimg from "../../assets/newsappImg.png";
import youthopiaImg from "../../assets/youthopiaImg.png";
import SmallCard from "../../components/SmallCard/SmallCard";
import Rentify from "../../assets/Rentify.png";
import Particlejs from "../../components/ParticleJs/Particlejs";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    ScrollReveal().reveal(".project__container__title",{delay: 500, duration: 1000 , origin: 'top', distance: '50px'});
    ScrollReveal().reveal(".headingInner",{delay: 700, duration: 1000 , origin: 'top', distance: '50px'});
    ScrollReveal().reveal(".project__container__card",{delay: 1000, duration: 1000 , origin: 'top', distance: '50px'});
  }, []);
  return (
    <div className="project" id="project">
      <Particlejs/>
      <div className="project__container">
        <h1 className="project__container__title">
          My <span>Projects</span>
        </h1>
        {/* <h1 className="headingInner">Complete<span>&nbsp;Projects</span></h1> */}
        <div className="project__container__card">
          <SmallCard img={jsrimg} title={"JSR Forms"} github={"https://github.com/tanishqJain16/form-website"} link={"https://jsrforms-dev.vercel.app/user/dashboard"} />
          <SmallCard img={sphurtiimg} title={"Sphurti 2023"} github={"https://github.com/tanishqJain16/sphurtiWebsite2.0"} link={""} />
          <SmallCard img={myportfolioimg} title={"My Portfolio"} github={"https://github.com/tanishqJain16/MyPortfolio"} link={"https://my-portfolio-tanishqjain16.vercel.app/"} />
          <SmallCard img={Rentify} title={"Rentify"} github={"https://github.com/tanishqJain16/rentify-frontend"} link={"https://rentify-woad.vercel.app/"} />
          <SmallCard img={newsappimg} title={"NewsApp"} github={"https://github.com/tanishqJain16/newsApp"} link={""} />
          <SmallCard img={youthopiaImg} title={"Youthopia'22"} github={"https://github.com/tanishqJain16/youthopiaWebsite"} link={""} />
        </div>
      </div>
    </div>
  )
}

export default Project
