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
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <Toast ref={toastRef} message="Message sent!" />
    </div>
  );
}

export default EmailForm;
