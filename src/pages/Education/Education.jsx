import EducationTimeline from "../../components/EducationTimeline/EducationTimeline";
import "./Education.css";
import educationImg from "../../assets/educationImg.webp";
import Particlejs from "../../components/ParticleJs/Particlejs";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function Education() {
  useEffect(() => {
    ScrollReveal().reveal(".educationLandingHeading", { delay: 500, duration: 1000, origin: "top", distance: "100px" });
    ScrollReveal().reveal(".educationLandingPara", { delay: 1000, duration: 1000, origin: "left", distance: "100px" });
    ScrollReveal().reveal(".educationLandingRight", { delay: 1500, origin: "right", distance: "100px" });
    ScrollReveal().reveal(".educationHeading", { delay: 200, origin: "top", distance: "100px" });
  }, []);

  return (
    <div className="education">
      <Particlejs />
      <div className="educationLanding">
        <div className="educationLandingLeft">
          <h1 className="educationLandingHeading">Educational <span>Background</span></h1>
          <p className="educationLandingPara">
            An investment in knowledge pays the best interest. <br /> <span>– Benjamin Franklin</span>
          </p>
        </div>
        <div className="educationLandingRight">
          <img src={educationImg} alt="" />
        </div>
      </div>
      <h1 className="educationHeading">FORMAL <span>EDUCATION</span></h1>
      <EducationTimeline />
    </div>
  )
}

export default Education
