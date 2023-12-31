import { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import { fetchCommentsByPost } from "../../../../apiHandlers/apiHandlers";

const Comments = ({ id, isCustom }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    retrieveCommentsByPost(id);
  }, [id]);

  const retrieveCommentsByPost = async (id) => {
    if (!isCustom) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const retrievedComments = await fetchCommentsByPost(id);
      const localComments = JSON.parse(localStorage.getItem("comments")).filter(
        (comment) => comment.postId === id
      );
      setCommentList([...retrievedComments, ...localComments]);
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
