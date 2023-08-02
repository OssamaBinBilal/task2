import React from "react";

const Button = ({ onClick, text, classes }) => {
  return (
    <button
      style={{ backgroundColor: "#3b5998" }}
      className={"btn btn-primary border-0 " + classes}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
