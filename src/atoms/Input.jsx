import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ placeholder, classes, type, onKeyUp = () => {} }, ref) => {
    return (
      <input
        placeholder={placeholder}
        className={"form-control " + classes}
        ref={ref}
        type={type}
        onKeyUp={onKeyUp}
        rows="3"
      />
    );
  }
);

export default Input;
