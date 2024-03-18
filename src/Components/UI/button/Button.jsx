import React from "react";
import style from "./Button.module.css";

const Button = ({ type, className, title, onClick }) => {
  return (
    <button
      type={type}
      className={`${className} ${style.title}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
