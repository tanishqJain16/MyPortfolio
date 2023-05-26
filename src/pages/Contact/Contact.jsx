import { useState } from "react";
import Particlejs from "../../components/ParticleJs/Particlejs";
import "./Contact.css";
import SendIcon from '@material-ui/icons/Send';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Contact() {
  const [disabled, setDisabled] = useState(false);
  const [creds, setCreds] = useState({ name: "", email: "", message: "" })
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    if(creds.name === "" || creds.email === "" || creds.message === ""){
      alert("Please fill all the fields");
      setDisabled(false);
      return;
    }
    await setDoc(doc(db, "contact", creds.email), {
      name: creds.name,
      email: creds.email,
      message: creds.message
    }).then(() => {
      setDisabled(false);
      alert("Message sent successfully");
      setCreds({ name: "", email: "", message: "" });
    }).catch((error) => {
      setDisabled(false);
      alert(error.message);
    }
    );
  }

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
            <input type="text" id="name" name="name" placeholder="Your name.." onChange={handleChange} required />
          </div>
          <div className="fields">
            {/* <label htmlFor="email">Email:</label> */}
            <input type="email" id="email" name="email" placeholder="Your Email.." onChange={handleChange} required />
          </div>
          <div className="fields">
            {/* <label htmlFor="message">Message:</label> */}
            <textarea rows={4} type="text" id="message" name="message" placeholder="Your message.." onChange={handleChange} required />
          </div>
          <button className="send" disabled={disabled} onClick={handlesubmit} style={{ fontFamily: "Arial, FontAwesome" }}>SEND &nbsp; <SendIcon /></button>
        </div>
      </div>
    </div>
  )
}

export default Contact
