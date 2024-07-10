import Particlejs from "../../components/ParticleJs/Particlejs"
import "./Experience.css"
import experienceImg from "../../assets/experienceImg.JPEG"
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard"
import gssoc from "../../assets/gssoc.jpg"
import ieee from "../../assets/ieee.jpeg"
import ScrollReveal from "scrollreveal"
import fuelCab from "../../assets/logo-fuelcab.svg"
import { useEffect } from "react"
import techAtPlay from "../../assets/logo-techAtPlay.png"

function Experience() {
    useEffect(() => {
        ScrollReveal().reveal(".experienceLandingHeading", { delay: 500, duration: 1000, origin: 'top', distance: '50px' });
        ScrollReveal().reveal(".experienceLandingHeadingPara", { delay: 1000, duration: 1000, origin: 'left', distance: '50px' });
        ScrollReveal().reveal(".experienceLandingRight", { delay: 1500, duration: 1000, origin: 'right', distance: '50px' });
        ScrollReveal().reveal(".experienceHeading", { delay: 500, duration: 1000, origin: 'top', distance: '50px' });
    }, [])
    return (
        <div className="experience">
            <Particlejs />
            <div className="experienceLanding">
                <div className="experienceLandingLeft">
                    <h1 className="experienceLandingHeading">My <span>Experience</span></h1>
                    <p className="experienceLandingHeadingPara">
                        {` Nothing ever becomes real 'til it is experienced.`} <br /> <span>― John Keats.</span>
                    </p>
                </div>
                <div className="experienceLandingRight">
                    <img src={experienceImg} alt="" />
                </div>
            </div>
            <h1 className="experienceHeading">WORK <span>EXPERIENCE</span></h1>
            <div className="experenceContent">
                <ExperienceCard img={techAtPlay} h1={"Full Stack Developer"} h2={"TechAtPlay"} h3={"Nov, 2023 - Present"} p={"As a Full Stack Web Development Intern at TechAtPlay, I played an integral role in both the development and maintenance of web applications, collaborating closely with cross-functional teams. My contributions spanned various stages of the development lifecycle, from conceptualization to deployment, where I leveraged my skills in both frontend and backend development to create robust and user-friendly solutions. By actively engaging with colleagues from different departments, I gained valuable insights into effective teamwork, communication, and problem-solving, further enhancing my capabilities as a developer in a dynamic and collaborative environment."} />

                <ExperienceCard img={fuelCab} h1={"Frontend Developer"} h2={"FuelCab India"} h3={"Aug, 2023 - Nov, 2023"} p={"During my internship at FuelCab India, I specialized in frontend web development while also assuming a leadership role, guiding a team of fellow web interns. I facilitated collaboration, organized meetings to discuss project goals, and provided mentorship to junior members, supporting them in problem-solving and code reviews. Through active participation in the development process, I deepened my understanding of web technologies and frameworks such as HTML, CSS, JavaScript, ReactJs. This experience not only allowed me to excel in frontend development but also equipped me with invaluable leadership and teamwork skills crucial for driving successful projects in a collaborative environment."} />

                <ExperienceCard img={ieee} h1={"WebMaster"} h2={"Institute of Electrical and Electronics Engineers"} h3={"2023 - Present"} p={"As the webmaster of the IEEE Student Branch in Dehradun, I have been privileged to contribute to our organization's growth. From developing and maintaining our dynamic website to showcasing our activities and achievements, I aim to reflect the professionalism and dedication of our student members. I'm grateful for the opportunity to serve as webmaster and remain committed to enhancing our online presence, keeping our community informed, connected, and inspired."} />

                <ExperienceCard img={ieee} h1={"Member"} h2={"Institute of Electrical and Electronics Engineers"} h3={"2022 - 2023"} p={"My time as a member of the IEEE Student Branch at DIT University was an enriching and transformative experience. Through workshops, collaborations, and events, I gained knowledge, skills, and lifelong friendships. The supportive environment fueled my passion for technology and shaped my personal and professional growth. The supportive and inclusive environment of the IEEE Student Branch nurtured my creativity and nurtured my passion for technology. Grateful for the incredible experiences and mentorship received during my tenure."} />

                <ExperienceCard img={gssoc} h1={"Contributor"} h2={"GirlScript Summer Of Code"} h3={"2023"} p={"As a GSSoC contributor, I embrace the opportunity to work on meaningful projects, collaborate with experienced mentors, and learn from fellow participants. This program provides a supportive environment for both technical and personal growth. Throughout the program, I actively engage with my team, communicate ideas, and seek guidance. Embracing challenges enhances my problem-solving abilities and broadens my software development knowledge. Contributing to open-source projects at GirlScript Summer of Code allows me to gain practical experience, collaborate with mentors and peers, and make meaningful contributions to the global open-source community."} />
            </div>
        </div>
    )
}

export default Experience
