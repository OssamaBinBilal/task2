import React, { useEffect, useRef, useState } from "react";
import "./posts.css";
import { useAuth } from "../../hooks/useAuth";
import { usePosts } from "../../hooks/usePosts";

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

const Comments = ({ id, isCustom }) => {
  const [commentList, setCommentList] = useState([]);
  const { deleteComment } = usePosts();

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

  useEffect(() => {
    retrieveCommentsByPost(id);
  }, [id]);

  return (
    <div className="px-4" style={{ maxHeight: "25vh", overflowY: "auto" }}>
      {commentList.map((comment) => (
        <p key={comment.id}>
          {comment.email ===
            JSON.parse(localStorage.getItem("currentUser"))?.email && (
            <button
              onClick={() => {
                deleteComment(comment.id);
                setCommentList([...commentList]);
              }}
            >
              kekw
            </button>
          )}
          <span className="fw-bold">{comment.email}:</span>
          <span style={{ color: "#808080" }}> {comment.body}</span>
        </p>
      ))}
    </div>
  );
};

const Post = ({ post, isCustom }) => {
  const [isCommentsOn, setIsCommentsOn] = useState(false);
  const { deletePost } = usePosts();
  return (
    <div
      key={post.id}
      style={{
        color: "#3b5998",
      }}
      className="my-5 rounded"
    >
      <h6
        className="font-weight-bold px-3 py-2 rounded-top"
        style={{ backgroundColor: "#f7f7f7", display: "inline" }}
      >{`${post.nameOfUser} - ${post.userEmail}`}</h6>
      <div
        style={{ backgroundColor: "#f7f7f7", marginTop: "-5px" }}
        className="p-3 rounded"
      >
        <h5>
          {post.userEmail ===
            JSON.parse(localStorage.getItem("currentUser")).email && (
            <button onClick={() => deletePost(post.id)}>delet</button>
          )}
          {post.title}
        </h5>
        <p style={{ color: "#808080" }}>{post.body}</p>
        <AddComment postId={post.id} setIsCommentsOn={setIsCommentsOn} />
        <p
          className="hover-pointer"
          onClick={() => setIsCommentsOn(!isCommentsOn)}
        >
          View Comments
        </p>
        {isCommentsOn ? <Comments id={post.id} isCustom={isCustom} /> : <></>}
      </div>
    </div>
  );
};

const PostList = ({ posts }) => {
  return (
    <>
      {JSON.parse(localStorage.getItem("posts"))
        ?.reverse()
        .map((customPost) => (
          <Post key={customPost.id} post={customPost} isCustom={true} />
        ))}
      {posts.map((post) => (
        <Post key={post.id} post={post} isCustom={false} />
      ))}
    </>
  );
};

const Posts = () => {
  const { posts, addPost } = usePosts();
  const { logout } = useAuth();
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
    <div className="container w-lg-50">
      <div className="row mt-3">
        <div className="col-md-3 p-3">
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3 border-0"
            style={{ backgroundColor: "#3b5998" }}
          >
            MY POSTS
          </button>
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3 border-0"
            style={{ backgroundColor: "#3b5998" }}
          >
            ALL POSTS
          </button>
          <button
            className="btn btn-primary w-100 border-0"
            style={{ backgroundColor: "#3b5998" }}
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            LOGOUT
          </button>
        </div>
        <div className="p-3 col-md-9">
          <div className="mb-5">
            <form>
              <div className="form-group">
                <input
                  placeholder={`Give your post a title`}
                  className="form-control mb-2"
                  id="exampleFormControlInput"
                  ref={titleRef}
                  rows="3"
                />

                <textarea
                  placeholder={`What's on your mind, ${
                    JSON.parse(localStorage.getItem("currentUser"))?.username
                  }?`}
                  className="form-control mb-2"
                  id="exampleFormControlTextarea1"
                  ref={contentRef}
                  rows="3"
                />
                <button
                  style={{ backgroundColor: "#3b5998" }}
                  className="btn btn-primary w-100 border-0"
                  onClick={handleSubmit}
                >
                  PUBLISH
                </button>
              </div>
            </form>
          </div>
          <div
            className="overflow-y-auto pe-3"
            style={{
              maxHeight: "65vh",
              borderRadius: "5px",
            }}
          >
            <PostList posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
