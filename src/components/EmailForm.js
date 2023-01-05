import "../assets/scss/emailForm.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../keys";
import Toast from "./Toast";

function EmailForm() {
  const form = useRef();
  const toastRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        toastRef.current.showToast();
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="emailForm">
      <div className="title">Contact Me</div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <input type="submit" value="Send" className="submit-btn" />
      </form>
      <Toast ref={toastRef} message="Message sent!" />
    </div>
  );
}

export default EmailForm;