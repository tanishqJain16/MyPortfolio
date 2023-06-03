import { useEffect } from "react"
import "./ExperienceCard.css"
import ScrollReveal from "scrollreveal"

function ExperienceCard(props) {
    
    useEffect(() => {
        ScrollReveal().reveal(".expCard" , {delay: 500, duration: 1000 , origin: 'top', distance: '50px'});
    }, [])

    return (
        <div className="expCard">
            <div className="expCardLeft">               {/* eslint-disable-next-line react/prop-types */}
                <img src={props.img} alt="" />
            </div>
            <div className="expCardRight">              {/* eslint-disable-next-line react/prop-types */}
                <h1>{props.h1}</h1>                     {/* eslint-disable-next-line react/prop-types */}
                <h2>{props.h2}</h2>                     {/* eslint-disable-next-line react/prop-types */}
                <h3>{props.h3}</h3>                     {/* eslint-disable-next-line react/prop-types */}
                <p>{props.p}</p>
            </div>
        </div>
    )
}

export default ExperienceCard
