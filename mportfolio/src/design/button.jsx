import React from "react";
import { style } from "../constant/index";

const Button = ({ title, className, href }) => {
  return (
    <a href={href} target="blank" >
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
