import Particlejs from "../../components/ParticleJs/Particlejs";
import "./Contact.css";
import SendIcon from '@material-ui/icons/Send';

function Contact() {
  return (
    <div className="contact">
      <Particlejs />
      <div className="card">
        <div className="card-header">
          <h1><span>Contact</span> Me</h1>
        </div>
        <div className="card-body">
          <div className="fields">
            {/* <label htmlFor="name">Name:</label> */}
            <input type="text" id="name" name="name" placeholder="Your name.." />
          </div>
          <div className="fields">
            {/* <label htmlFor="email">Email:</label> */}
            <input type="email" id="email" name="email" placeholder="Your Email.." />
          </div>
          <div className="fields">
            {/* <label htmlFor="message">Message:</label> */}
            <textarea rows={4} type="text" id="message" name="message" placeholder="Your message.." />
          </div>
          <button className="send" style={{ fontFamily: "Arial, FontAwesome" }}>SEND &nbsp; <SendIcon /></button>
        </div>
      </div>
    </div>
  )
}

export default Contact
