import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';

function EducationTimeline() {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(110, 110, 110, 0.219)', color: '#fff', backdropFilter: "blur(10px)" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date="2021 - present"
                    iconStyle={{ background: '#F5A302', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.2rem" }}>Bachelor of Technology in Computer science and engineering.</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ color: "#F5A302", fontWeight: "900" }}>DIT University, Dehradun</h4>
                    <p>
                        Student <br /> 9.47 CGPA
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(110, 110, 110, 0.219)', color: '#fff', backdropFilter: "blur(10px)" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date="2019 - 2021"
                    iconStyle={{ background: '#F5A302', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.2rem" }}>Higher Secondary Education.</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ color: "#F5A302", fontWeight: "900" }}>Sidhhartha Public School, Delhi</h4>
                    <p>
                        Student <br /> Board - <span style={{ color: "#F5A302", fontWeight: "700" }}>CBSE</span><br /> 87.4%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(110, 110, 110, 0.219)', color: '#fff', backdropFilter: "blur(10px)" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date="2017 - 2019"
                    iconStyle={{ background: '#F5A302', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.2rem" }}>Secondary School Education.</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ color: "#F5A302", fontWeight: "900" }}>Christu Jyothi Convent Sr. Sec. School, Baraut</h4>
                    <p>
                        Student <br /> Board - <span style={{ color: "#F5A302", fontWeight: "700" }}>ICSE</span><br /> 91.2%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default EducationTimeline
