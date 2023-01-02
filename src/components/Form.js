import React, { useRef, useState } from "react";
import "./Form.css"
import emailjs from '@emailjs/browser';
import Popup from "./Popup";

export const Form = () => {
    const form = useRef();
    const [buttonPopup, setButtonPopup] = useState(false)

    const sendEmail = (e) => {
        // alert('Thank you for your message! I will respond to you as soon as possible');
    
    setButtonPopup(true)
      e.preventDefault();

      emailjs.sendForm('contact_service', 'contact_form', form.current, 'EOtf6SBsE2JTjb_SF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

       
        
    };



  return (
    <>
    <div className="form"></div>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="from_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your Message Here" name="message"></textarea>
            <input className="btn" type="submit" value="Send"></input>
        </form>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1 className="popuph3">Message Received!</h1>
        <p className="popupp">Thank you for connecting with me! I look forward to reading your message, and will respond to you as quickly as possible.</p>
    </Popup>
        
        </>
  )
}

export default Form