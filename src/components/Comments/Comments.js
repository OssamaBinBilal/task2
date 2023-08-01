import { useState, useEffect } from "react";

import Comment from "../Comment/Comment";

const Comments = ({ id, isCustom }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    retrieveCommentsByPost(id);
  }, [id]);

  const retrieveCommentsByPost = (id) => {
    if (!isCustom) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const localComments = JSON.parse(
            localStorage.getItem("comments")
          ).filter((comment) => comment.postId === id);
          setCommentList([...JSON.parse(result), ...localComments]);
        })
        .catch((error) => console.log("error", error));
    } else {
      if (localStorage.getItem("comments")) {
        const postComments = JSON.parse(
          localStorage.getItem("comments")
        ).filter((comment) => comment.postId === id);
        setCommentList(postComments);
      }
    }
  };

  return (
    <div className="px-4" style={{ maxHeight: "25vh", overflowY: "auto" }}>
      {commentList.length > 0 &&
        commentList.map((comment) => (
          <Comment
            id={comment.id}
            email={comment.email}
            body={comment.body}
            commentList={commentList}
            setCommentList={setCommentList}
          />
        ))}
      {commentList.length === 0 && (
        <p className="text-center">No comments found under this post</p>
      )}
    </div>
  );
};

export default Comments;
