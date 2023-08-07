import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit, FiSave } from "react-icons/fi";
import { usePosts } from "../../../../hooks/usePosts";

const CommentIcons = ({
  id,
  setCommentList,
  commentList,
  isEditable,
  setIsEditable,
  bodyRef,
}) => {
  const { editComment, deleteComment } = usePosts();
  return (
    <>
      <RiDeleteBin6Line
        onClick={() => {
          deleteComment(id);
          setCommentList([...commentList]);
        }}
        style={{ color: "red", marginLeft: "auto" }}
      />
      {!isEditable && (
        <FiEdit
          style={{
            color: "green",
            marginInline: "5px",
          }}
          className="hover-pointer"
          onClick={() => setIsEditable(!isEditable)}
        />
      )}
      {isEditable && (
        <FiSave
          className="hover-pointer"
          onClick={() => {
            editComment(id, bodyRef.current.innerText);
            setIsEditable(false);
          }}
          style={{
            color: "blue",
            marginInline: "5px",
          }}
        />
      )}
    </>
  );
};

export default CommentIcons;
