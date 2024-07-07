import "./SmallCard.css"
import GithubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';


function SmallCard(props) {
    const handleGithub = () => {                {/* eslint-disable-next-line react/prop-types */}
        window.open(props.github, "_blank");
    }

    const handleLink = () => {                  {/* eslint-disable-next-line react/prop-types */}
        window.open(props.link, "_blank");
    }

    return (
        <div className="smallCard">             {/* eslint-disable-next-line react/prop-types */}
            <img src={props.img} alt="" />
            <div className="smallCardP">        {/* eslint-disable-next-line react/prop-types */}
                <p>{props.title}</p>
                <div className="smallCard__icon">
                    <GithubIcon onClick={handleGithub} />
                    {props.link && <LinkIcon onClick={handleLink}/>}
                </div>
            </div>
        </div>
    )
}

export default SmallCard
