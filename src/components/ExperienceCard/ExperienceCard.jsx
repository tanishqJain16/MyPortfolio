import "./ExperienceCard.css"

function ExperienceCard(props) {
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
