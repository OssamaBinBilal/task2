import { usePosts } from "../../hooks/usePosts";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit, FiSave } from "react-icons/fi";

const PostIcons = ({ post, isEditable, setIsEditable, titleRef, bodyRef }) => {
  const { deletePost, editPost } = usePosts();

  return (
    <div style={{ marginLeft: "auto" }}>
      <RiDeleteBin6Line
        className="hover-pointer"
        onClick={() => deletePost(post.id)}
        style={{ color: "red", fontSize: "24px" }}
      />
      {!isEditable && (
        <FiEdit
          style={{
            color: "green",
            fontSize: "20px",
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
            editPost(
              post.id,
              titleRef.current.innerText,
              bodyRef.current.innerText
            );
            setIsEditable(false);
          }}
          style={{
            color: "blue",
            fontSize: "22px",
            marginInline: "5px",
          }}
        />
      )}
    </div>
  );
};

export default PostIcons;
