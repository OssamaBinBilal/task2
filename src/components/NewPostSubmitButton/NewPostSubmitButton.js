import React from "react";

const NewPostSubmitButton = ({ text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: "#3b5998" }}
      className="btn btn-primary w-100 border-0"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NewPostSubmitButton;
