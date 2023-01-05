import "../assets/scss/contact.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import EmailForm from "../components/EmailForm";

import linkedin from "../assets/icons/linkedin.png";
import arrow from "../assets/icons/arrow.png";
import mail from "../assets/icons/mail-icon.png";
import phone from "../assets/icons/phone-icon.png";
import location from "../assets/icons/location-icon.png";
import kirby from "../assets/icons/kirbyFloat.png";

function Contact({ toastShow }) {
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);
  const [locationHover, setLocationHover] = useState(false);
  const [mailHover, setMailHover] = useState(false);

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
      <motion.div
        className="email"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0 }}
        onMouseEnter={() => {
          setMailHover(true);
        }}
        onMouseLeave={() => {
          setMailHover(false);
        }}
      >
        {mailHover && (
          <div className="mail-hover">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              brandon
            </motion.div>{" "}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.4 }}
            >
              lam4237
            </motion.div>{" "}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.8 }}
            >
              @gmail.com
            </motion.div>
          </div>
        )}
        {!mailHover && <img src={mail} alt="mail-icon" />}
      </motion.div>
      <motion.div
        className="phone"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0.15 }}
        onMouseEnter={() => {
          setPhoneHover(true);
        }}
        onMouseLeave={() => {
          setPhoneHover(false);
        }}
      >
        {phoneHover && (
          <div className="phone-hover">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              917
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.4 }}
            >
              727
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.8 }}
            >
              353
            </motion.div>
          </div>
        )}
        {!phoneHover && <img src={phone} alt="phone-icon" />}
      </motion.div>
      <motion.div
        className="kirby"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0.25 }}
      >
        <img src={kirby} alt="kirby" />
      </motion.div>
      <motion.div
        className="contact-form"
        id="contact-form"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0.35 }}
      >
        <EmailForm toastShow={toastShow} />
      </motion.div>
      <motion.a
        className="linkedin"
        initial={{ y: "80vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0.45 }}
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
      </motion.a>
      <motion.div
        className="location"
        initial={{ y: "80vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1.2, delay: 0.55 }}
        onMouseEnter={() => {
          setLocationHover(true);
        }}
        onMouseLeave={() => {
          setLocationHover(false);
        }}
      >
        {locationHover && (
          <div className="location-hover">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              Queens
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.4 }}
            >
              NYC
            </motion.div>
          </div>
        )}
        {!locationHover && <img src={location} alt="location-icon" />}
      </motion.div>
    </div>
  );
}

export default Contact;
