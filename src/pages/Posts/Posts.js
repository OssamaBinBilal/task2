import React, { useEffect, useState } from "react";
import usePosts from "../../hooks/usePosts";
import useUsers from "../../hooks/useUsers";

const Posts = () => {
  const { posts } = usePosts();
  //   const { users } = useUsers();

  //   useEffect(() => {
  //     console.log(users);
  //   }, [users]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div class="container">
      <div className="row">
        <div className="col-md-3 p-3">
          <button type="submit" class="btn btn-primary w-100 mb-3">
            MY POSTS
          </button>
          <button type="submit" class="btn btn-primary w-100">
            ALL POSTS
          </button>
        </div>
        <div
          className="p-3 col-md-9 overflow-y-auto"
          style={{ backgroundColor: "red", maxHeight: "100vh" }}
        >
          <div className="mb-5">
            <form>
              <div class="form-group">
                <textarea
                  placeholder="What's on your mind, Usama?"
                  class="form-control mb-2"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
                <button type="submit" class="btn btn-primary w-100">
                  PUBLISH
                </button>
              </div>
            </form>
          </div>
          <div style={{ backgroundColor: "green" }}>
            {posts.map((post) => (
              <div
                key={post.id}
                style={{
                  color: "#FEE715",
                  textAlign: "justify",
                }}
                className="my-5 rounded"
              >
                <div>
                  <h6 className="font-weight-bold">{`${post.nameOfUser} - ${post.userEmail}`}</h6>
                </div>
                <div
                  style={{ border: "1px solid white", zIndex: "-1" }}
                  className="p-3 rounded"
                >
                  <h5>{post.title}</h5>
                  <p style={{ color: "white" }}>{post.body}</p>
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
