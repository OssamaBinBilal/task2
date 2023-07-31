import React from "react";

const TextInput = ({ placeholder, passedRef, type }) => {
  return (
    <div className="w-50 text-center my-1">
      <input
        className="w-75"
        placeholder={placeholder}
        ref={passedRef}
        type={type}
        style={{
          padding: "10px",
          marginBottom: "5px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#f2f2f2",
        }}
      />
    </div>
  );
};

export default TextInput;
