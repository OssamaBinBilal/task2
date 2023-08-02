import React from "react";

const EditableParagraph = ({ bodyRef, isEditable, body }) => {
  return (
    <p ref={bodyRef} contentEditable={isEditable} style={{ color: "#808080" }}>
      {body}
    </p>
  );
};

export default EditableParagraph;
