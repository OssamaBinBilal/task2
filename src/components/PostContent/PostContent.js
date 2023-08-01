import { usePosts } from "../../hooks/usePosts";
import { useRef, useState, useEffect } from "react";
import PostTitle from "../PostTitle/PostTitle";
import PostIcons from "../PostIcons/PostIcons";
import PostBody from "../PostBody/PostBody";
import ViewCommentsBtn from "../ViewCommentsBtn/ViewCommentsBtn";
import Comments from "../Comments/Comments";

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
    <div className="my-3">
      <input
        ref={inputRef}
        className="p-2 w-100 border-0 rounded"
        placeholder="Add a comment..."
        onKeyUp={handleKeyPress}
      />
    </div>
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
        <PostTitle title={post.title} ref={titleRef} isEditable={isEditable} />
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
      <PostBody body={post.body} bodyRef={bodyRef} isEditable={isEditable} />
      <AddComment postId={post.id} setIsCommentsOn={setIsCommentsOn} />
      <ViewCommentsBtn
        text="View Comments"
        onClick={() => setIsCommentsOn(!isCommentsOn)}
      />
      {isCommentsOn ? <Comments id={post.id} isCustom={isCustom} /> : <></>}
    </div>
  );
};

export default PostContent;
