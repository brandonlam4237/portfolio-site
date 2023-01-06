import "../assets/scss/emailForm.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function EmailForm({ toastShow }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toastShow();
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
    </div>
  );
}

export default EmailForm;
