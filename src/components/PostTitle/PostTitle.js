import React, { forwardRef } from "react";

const PostTitle = forwardRef(({ title, isEditable }, ref) => {
  return (
    <h5 ref={ref} contentEditable={isEditable}>
      {title}
    </h5>
  );
});

export default PostTitle;
