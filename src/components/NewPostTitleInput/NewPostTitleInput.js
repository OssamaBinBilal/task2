import { forwardRef } from "react";

const NewPostTitleInput = forwardRef(({ placeholder }, ref) => {
  return (
    <input
      placeholder={placeholder}
      className="form-control mb-2"
      ref={ref}
      rows="3"
    />
  );
});

export default NewPostTitleInput;
