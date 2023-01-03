import "../assets/scss/contact.scss";
import { motion } from "framer-motion";
import { useState } from "react";

import linkedin from "../assets/icons/linkedin.png";
import arrow from "../assets/icons/arrow.png";
import mail from "../assets/icons/mail-icon.png";
import phone from "../assets/icons/phone-icon.png";
import location from "../assets/icons/location-icon.png";

function Contact() {
  const [linkedinHover, setLinkedinHover] = useState(false);

  const arrowPopup = {
    init: {
      y: 10,
      opacity: 0.4,
    },
    end: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="contact">
      <div className="email">
        <img src={mail} alt="mail-icon" />
      </div>
      <div className="phone">
        <img src={phone} alt="phone-icon" />
      </div>
      <div className="contact-form"></div>
      <a
        className="linkedin"
        initial={{ y: "80vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0.4 }}
        href="https://www.linkedin.com/in/brandon-lam-b30819165/"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => {
          setLinkedinHover(true);
        }}
        onMouseLeave={() => {
          setLinkedinHover(false);
        }}
      >
        {linkedinHover && (
          <motion.img
            id="arrow"
            variants={arrowPopup}
            initial="init"
            animate="end"
            src={arrow}
            alt="arrow"
          />
        )}
        <img src={linkedin} alt="linkedin-icon" />
      </a>
      <div className="location">
        <img src={location} alt="location-icon" />
      </div>
    </div>
  );
}

export default Contact;
