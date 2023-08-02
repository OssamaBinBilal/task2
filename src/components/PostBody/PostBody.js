import React from "react";
import EditableParagraph from "../../atoms/EditableParagraph";

const PostBody = ({ body, bodyRef, isEditable }) => {
  return (
    <EditableParagraph bodyRef={bodyRef} isEditable={isEditable} body={body} />
  );
};

export default PostBody;
