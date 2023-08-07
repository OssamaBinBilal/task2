import { useRef, useState, useEffect } from "react";
import PostIcons from "../PostIcons/PostIcons";
import EditableParagraph from "../../../../atoms/EditableParagraph";
import Comments from "../../../molecules/commentSection/Comments/Comments";
import Input from "../../../../atoms/Input";
import { usePosts } from "../../../../hooks/usePosts";

const AddComment = ({ postId, setIsCommentsOn }) => {
  const inputRef = useRef();
  const { addComment } = usePosts();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addComment(postId, inputRef.current.value);
      setIsCommentsOn(true);
      inputRef.current.value = "";
    }
  };

  return (
    <Input
      ref={inputRef}
      classes="p-2 w-100 border-0 rounded mb-3"
      placeholder="Add a comment..."
      onKeyUp={handleKeyPress}
    />
  );
};

const PostContent = ({ post, isCustom }) => {
  const [isCommentsOn, setIsCommentsOn] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const titleRef = useRef();
  const bodyRef = useRef();

  return (
    <div
      style={{ backgroundColor: "#f7f7f7", marginTop: "-5px" }}
      className="p-3 rounded"
    >
      <div className="d-flex">
        <h5 ref={titleRef} contentEditable={isEditable}>
          {post.title}
        </h5>
        {post.userEmail ===
          JSON.parse(localStorage.getItem("currentUser")).email && (
          <PostIcons
            post={post}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
            titleRef={titleRef}
            bodyRef={bodyRef}
          />
        )}
      </div>
      <EditableParagraph
        bodyRef={bodyRef}
        isEditable={isEditable}
        body={post.body}
      />
      <AddComment postId={post.id} setIsCommentsOn={setIsCommentsOn} />
      <p
        className="hover-pointer"
        onClick={() => setIsCommentsOn(!isCommentsOn)}
      >
        View Comments
      </p>

      {isCommentsOn ? <Comments id={post.id} isCustom={isCustom} /> : <></>}
    </div>
  );
};

export default PostContent;
