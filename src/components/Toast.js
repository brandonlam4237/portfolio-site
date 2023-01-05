import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../assets/scss/toast.scss";
import mail from "../assets/icons/mail-icon.png";

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
        {props.message}
      </div>
    </div>
  );
});

export default Toast;
