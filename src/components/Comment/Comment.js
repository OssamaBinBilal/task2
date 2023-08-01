import { usePosts } from "../../hooks/usePosts";
import { useRef, useState } from "react";
import CommentEmail from "../CommentEmail/CommentEmail";
import CommentBody from "../CommentBody/CommentBody";
import CommentIcons from "../CommentIcons/CommentIcons";

const Comment = ({ id, email, body, commentList, setCommentList }) => {
  const [isEditable, setIsEditable] = useState(false);
  const bodyRef = useRef();

  return (
    <p key={id} className="d-flex">
      <CommentEmail email={email} />
      <CommentBody bodyRef={bodyRef} isEditable={isEditable} body={body} />
      {email === JSON.parse(localStorage.getItem("currentUser"))?.email && (
        <CommentIcons
          id={id}
          commentList={commentList}
          setCommentList={setCommentList}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          bodyRef={bodyRef}
        />
      )}
    </p>
  );
};

export default Comment;
