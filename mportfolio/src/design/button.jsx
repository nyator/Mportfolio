import React from "react";
import { style } from "../constant/index";

const Button = ({title}) => {
  return (
    <button type="button" className={`${style.navbutton} ml-2 text-nowrap`}>
      {title}
    </button>
  );
};

export default Button;
