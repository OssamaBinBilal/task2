import React from "react";

const SidebarButton = ({ text, onClick }) => {
  return (
    <button
      className="btn btn-primary w-100 mb-3 border-0"
      style={{ backgroundColor: "#3b5998" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SidebarButton;
