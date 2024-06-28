import React from "react";
import { style } from "../constant/index";

const Button = ({ title, className, link }) => {
  return (
    <a href={link}>
      <button
        type="button"
        className={`${style.navbutton} ${className} ml-2 text-nowrap`}
      >
        {title}
      </button>
    </a>
  );
};

export default Button;
