import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../assets/scss/toast.scss";
import mail from "../assets/icons/mail-icon2.png";
import { motion } from "framer-motion";

const Toast = forwardRef((props, ref) => {
  const [showToast, setShowToast] = useState(false);
  useImperativeHandle(ref, () => ({
    showToast() {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    },
  }));
  return (
    <div id={showToast ? "show" : "hide"}>
      <div className="toast">
        <img src={mail} alt="mail" />
        <div>{props.message}</div>
        <span className="bg" />
      </div>
    </div>
  );
});

export default Toast;
