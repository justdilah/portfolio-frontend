import React  from 'react';
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import {Link} from "react-router-dom";


function Contact() {
    return (
        <div className="contact-div">
            <div className="contact"><a href="https://github.com/justdilah"><img src={github}/></a></div>
            <div className="contact"><a href="https://www.linkedin.com/in/nur-dilah-binte-zaini-582b701a3/"><img src={linkedin}/></a></div>
            <div className="contact">
                <Link
                to='#'
                onClick={(e) => {
                    window.location.href = "mailto:nurdilah352@gmail.com";
                    e.preventDefault();
                }}>
                    <img alt="nurdilah352@gmail.com" src={mail}/>
                </Link>
            </div>

            {/*<MailBtn label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />*/}
        </div>
    );
}
export default Contact;