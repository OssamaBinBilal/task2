import React from "react";
import PostAuthor from "../PostAuthor/PostAuthor";
import PostContent from "../PostContent/PostContent";

const Post = ({ post, isCustom }) => {
  return (
    <div
      key={post.id}
      style={{
        color: "#3b5998",
      }}
      className="my-5 rounded"
    >
      <PostAuthor name={post.nameOfUser} email={post.userEmail} />
      <PostContent post={post} isCustom={isCustom} />
    </div>
  );
};

export default Post;
