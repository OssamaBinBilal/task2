import React, { forwardRef } from "react";

const TextArea = forwardRef(({ placeholder, classes }, ref) => {
  return (
    <textarea
      style={{ resize: "none" }}
      placeholder={placeholder}
      className={"form-control mb-2 " + classes}
      ref={ref}
      rows="3"
    />
  );
});

export default TextArea;
