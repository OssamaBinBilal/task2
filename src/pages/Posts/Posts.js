import React, { useEffect, useState } from "react";
import usePosts from "../../hooks/usePosts";
import useUsers from "../../hooks/useUsers";

const Posts = () => {
  const { posts } = usePosts();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(posts);
  }, [posts]);

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
            className="btn btn-primary w-100 border-0"
            style={{ backgroundColor: "#3b5998" }}
          >
            ALL POSTS
          </button>
        </div>
        <div className="p-3 col-md-9">
          <div className="mb-5">
            <form>
              <div className="form-group">
                <textarea
                  placeholder="What's on your mind, Usama?"
                  className="form-control mb-2"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
                <button
                  type="submit"
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
            className="overflow-y-auto"
            style={{
              maxHeight: "65vh",
              borderRadius: "5px",
            }}
          >
            {posts.map((post) => (
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
                  <h5>{post.title}</h5>
                  <p style={{ color: "#808080" }}>{post.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
