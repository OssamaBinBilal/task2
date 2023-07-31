import React from "react";

const SubmitButton = ({ text, onClick }) => {
  return (
    <div className="w-50 text-center my-4">
      <button
        style={{ backgroundolor: "#3b5998" }}
        type="button"
        className="btn btn-primary w-75"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
