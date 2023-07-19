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
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ backgroundColor: "cyan", marginBlock: 5, color: "#696969" }}
        >
          {/* <h5>{users.filter((user) => user.id === post.userId)[0].name}</h5> */}
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
