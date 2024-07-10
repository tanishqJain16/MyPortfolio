import { useEffect, useState } from "react";
import Particlejs from "../../components/ParticleJs/Particlejs";
import "./Contact.css";
import SendIcon from '@material-ui/icons/Send';
import ScrollReveal from "scrollreveal";
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

function Contact() {
  const [disabled, setDisabled] = useState(false);
  const [creds, setCreds] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    ScrollReveal().reveal(".contact", { delay: 500, duration: 1000, origin: 'top', distance: '50px' });
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    if (creds.name === "" || creds.email === "" || creds.message === "") {
      toast.error("Please fill all the fields");
      setDisabled(false);
      return;
    }

    toast.promise(
      emailjs.send("service_lpji8hi", "template_hjoiu2j", {
        from_name: creds.name,
        to_name: "Tanishq",
        message: creds.message + "\n\n" + "Sender's Email: " + creds.email,
      }, "ur4QbpflnJuieB0i3"),
      {
        loading: 'Sending message...',
        success: 'Message sent successfully!',
        error: 'Failed to send message.'
      }
    ).then(() => {
      setDisabled(false);
      setCreds({ name: "", email: "", message: "" });
    }).catch(() => {
      setDisabled(false);
    });
  }

  return (
    <div className="contact" id="contact">
      <Particlejs />
      <div className="card">
        <div className="card-header">
          <h1><span>Contact</span> Me</h1>
        </div>
        <div className="card-body">
          <div className="fields">
            <input type="text" id="name" value={creds.name} name="name" placeholder="Your name.." onChange={handleChange} required />
          </div>
          <div className="fields">
            <input type="email" id="email" name="email" value={creds.email} placeholder="Your Email.." onChange={handleChange} required />
          </div>
          <div className="fields">
            <textarea rows={4} type="text" id="message" value={creds.message} name="message" placeholder="Your message.." onChange={handleChange} required />
          </div>
          <button className="send" disabled={disabled} onClick={handlesubmit} style={{ fontFamily: "Arial, FontAwesome" }}>SEND &nbsp; <SendIcon /></button>
        </div>
      </div>
    </div>
  )
}

export default Contact;
