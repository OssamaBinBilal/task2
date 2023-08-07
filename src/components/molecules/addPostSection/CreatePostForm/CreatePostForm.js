import React, { useRef } from "react";
import { usePosts } from "../../../../hooks/usePosts";
import Input from "../../../../atoms/Input";
import TextArea from "../../../../atoms/TextArea";
import Button from "../../../../atoms/Button";

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
        <Input
          placeholder="Give your post a title"
          ref={titleRef}
          classes={"mb-2"}
        />
        <TextArea
          placeholder={`What's on your mind, ${
            JSON.parse(localStorage.getItem("currentUser"))?.username
          }?`}
          ref={contentRef}
        />
        <Button text={"PUBLISH"} onClick={handleSubmit} classes={"w-100"} />
      </div>
    </form>
  );
};

export default CreatePostForm;
