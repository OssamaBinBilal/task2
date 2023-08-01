import React, { useRef } from "react";
import { usePosts } from "../../hooks/usePosts";
import NewPostTitleInput from "../NewPostTitleInput/NewPostTitleInput";
import NewPostBodyInput from "../NewPostBodyInput/NewPostBodyInput";
import NewPostSubmitButton from "../NewPostSubmitButton/NewPostSubmitButton";

const CreatePostForm = () => {
  const { addPost } = usePosts();
  const titleRef = useRef();
  const contentRef = useRef();
  const resetInputs = () => {
    titleRef.current.value = "";
    contentRef.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(titleRef.current.value, contentRef.current.value);
    resetInputs();
  };

  return (
    <form className="mb-5">
      <div className="form-group">
        <NewPostTitleInput
          placeholder="Give your post a title"
          ref={titleRef}
        />
        <NewPostBodyInput
          placeholder={`What's on your mind, ${
            JSON.parse(localStorage.getItem("currentUser"))?.username
          }?`}
          ref={contentRef}
        />
        <NewPostSubmitButton text="PUBLISH" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default CreatePostForm;
