import { useRef, useState } from "react";
import CommentIcons from "../CommentIcons/CommentIcons";

const Comment = ({ id, email, body, commentList, setCommentList }) => {
  const [isEditable, setIsEditable] = useState(false);
  const bodyRef = useRef();

  return (
    <p key={id} className="d-flex">
      <span className="fw-bold">{email}</span>
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
