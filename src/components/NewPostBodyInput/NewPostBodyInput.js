import React, { forwardRef } from "react";

const NewPostBodyInput = forwardRef(({ placeholder }, ref) => {
  return (
    <textarea
      placeholder={placeholder}
      className="form-control mb-2"
      ref={ref}
      rows="3"
    />
  );
});

export default NewPostBodyInput;
