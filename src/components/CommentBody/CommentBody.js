import React from "react";

const CommentBody = ({ bodyRef, isEditable, body }) => {
  return (
    <p
      ref={bodyRef}
      contentEditable={isEditable}
      style={{
        color: "#808080",
        marginLeft: "5px",
      }}
    >
      : {body}
    </p>
  );
};

export default CommentBody;
