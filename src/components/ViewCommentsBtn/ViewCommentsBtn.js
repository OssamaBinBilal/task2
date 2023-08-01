import React from "react";

const ViewCommentsBtn = ({ text, onClick }) => {
  return (
    <p className="hover-pointer" onClick={onClick}>
      {text}
    </p>
  );
};

export default ViewCommentsBtn;
