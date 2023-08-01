import React from "react";

const CommentBody = ({ bodyRef, isEditable, body }) => {
  return (
    <span
      ref={bodyRef}
      contentEditable={isEditable}
      style={{
        color: "#808080",
        maxWidth: "50%",
        overflowX: "hidden",
        marginLeft: "5px",
      }}
    >
      : {body}
    </span>
  );
};

export default CommentBody;
