import EducationTimeline from "../../components/EducationTimeline/EducationTimeline";
import "./Education.css";
import educationImg from "../../assets/educationImg.png";

function Education() {
  return (
    <div className="education">
      <div className="educationLanding">
        <div className="educationLandingLeft">
          <h1>Educational <span>Background</span></h1>
          <p>
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
