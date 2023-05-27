import Particlejs from "../../components/ParticleJs/Particlejs"
import "./Experience.css"
import experienceImg from "../../assets/experienceImg.webp"
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard"
import gssoc from "../../assets/gssoc.jpg"
import ieee from "../../assets/ieee.jpeg"

function Experience() {
    return (
        <div className="experience">
            <Particlejs />
            <div className="experienceLanding">
                <div className="experienceLandingLeft">
                    <h1>My <span>Experience</span></h1>
                    <p>
                       {` Nothing ever becomes real 'til it is experienced.`} <br /> <span>― John Keats.</span>
                    </p>
                </div>
                <div className="experienceLandingRight">
                    <img src={experienceImg} alt="" />
                </div>
            </div>
            <h1 className="experienceHeading">WORK <span>EXPERIENCE</span></h1>
            <div className="experenceContent">
                <ExperienceCard img={gssoc} h1={"Contributor"} h2={"GirlScript Summer Of Code"} h3={"2023 - Present"} p={"As a GSSoC contributor, I embrace the opportunity to work on meaningful projects, collaborate with experienced mentors, and learn from fellow participants. This program provides a supportive environment for both technical and personal growth. Throughout the program, I actively engage with my team, communicate ideas, and seek guidance. Embracing challenges enhances my problem-solving abilities and broadens my software development knowledge. Contributing to open-source projects at GirlScript Summer of Code allows me to gain practical experience, collaborate with mentors and peers, and make meaningful contributions to the global open-source community."}/>
                
                <ExperienceCard img={ieee} h1={"WebMaster"} h2={"Institute of Electrical and Electronics Engineers"} h3={"2023 - Present"} p={"As the webmaster of the IEEE Student Branch in Dehradun, I have been privileged to contribute to our organization's growth. From developing and maintaining our dynamic website to showcasing our activities and achievements, I aim to reflect the professionalism and dedication of our student members. I'm grateful for the opportunity to serve as webmaster and remain committed to enhancing our online presence, keeping our community informed, connected, and inspired."}/>

                <ExperienceCard img={ieee} h1={"Member"} h2={"Institute of Electrical and Electronics Engineers"} h3={"2022 - 2023"} p={"My time as a member of the IEEE Student Branch at DIT University was an enriching and transformative experience. Through workshops, collaborations, and events, I gained knowledge, skills, and lifelong friendships. The supportive environment fueled my passion for technology and shaped my personal and professional growth. The supportive and inclusive environment of the IEEE Student Branch nurtured my creativity and nurtured my passion for technology. Grateful for the incredible experiences and mentorship received during my tenure."}/>
            </div>
        </div>
    )
}

export default Experience