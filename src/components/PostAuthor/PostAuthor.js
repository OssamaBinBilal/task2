import React from "react";

const PostAuthor = ({ name, email }) => {
  return (
    <h6
      className="font-weight-bold px-3 py-2 rounded-top"
      style={{ backgroundColor: "#f7f7f7", display: "inline" }}
    >
      {`${name} - ${email}`}
    </h6>
  );
};

export default PostAuthor;
