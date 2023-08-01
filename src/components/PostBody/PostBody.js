import React from "react";

const PostBody = ({ body, bodyRef, isEditable }) => {
  return (
    <p ref={bodyRef} contentEditable={isEditable} style={{ color: "#808080" }}>
      {body}
    </p>
  );
};

export default PostBody;
