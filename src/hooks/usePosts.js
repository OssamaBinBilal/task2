import React, { createContext, useContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PostContext = createContext();

const getLatestId = (entity) => {
  if (!localStorage.getItem(entity)) localStorage.setItem(entity, 1000);
  const latestId = localStorage.getItem(entity);
  localStorage.setItem(entity, Number(latestId) + 1);
  return latestId;
};

export function usePosts() {
  return useContext(PostContext);
}

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const retrievePosts = async () => {
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const fetchedPosts = await postsResponse.json();
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const fetchedUsers = await usersResponse.json();

    const mergedArray = fetchedPosts.map((post) => {
      return {
        ...post,
        username: fetchedUsers.filter((user) => user.id === post.userId)[0]
          .username,
        nameOfUser: fetchedUsers.filter((user) => user.id === post.userId)[0]
          .name,
        userEmail: fetchedUsers.filter((user) => user.id === post.userId)[0]
          .email,
      };
    });

    setPosts(mergedArray);
  };

  useEffect(() => {
    retrievePosts();
  }, []);

  const addPost = (title, body) => {
    let idToAssign = getLatestId("latestPostId");
    const userEmail = JSON.parse(localStorage.getItem("currentUser"))?.email;
    const nameOfUser = JSON.parse(
      localStorage.getItem("currentUser")
    )?.username;

    const id = idToAssign;
    if (!localStorage.getItem("posts")) {
      setPosts([
        ...posts,
        {
          id: idToAssign,
          title,
          body,
          userEmail,
          nameOfUser,
        },
      ]);
      localStorage.setItem(
        "posts",
        JSON.stringify([
          {
            id: idToAssign,
            title,
            body,
            userEmail,
            nameOfUser,
          },
        ])
      );
    } else {
      setPosts([
        ...posts,
        {
          id: idToAssign,
          title,
          body,
          userEmail,
          nameOfUser,
        },
      ]);
      localStorage.setItem(
        "posts",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("posts")),
          {
            id: idToAssign,
            title,
            body,
            userEmail,
            nameOfUser,
          },
        ])
      );
    }
  };

  const addComment = (postId, body) => {
    let idToAssign = getLatestId("latestCommentId");
    if (!localStorage.getItem("comments")) {
      localStorage.setItem(
        "comments",
        JSON.stringify([
          {
            id: idToAssign,
            postId,
            body,
            email: JSON.parse(localStorage.getItem("currentUser"))?.email,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "comments",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("comments")),
          {
            id: idToAssign,
            postId,
            body,
            email: JSON.parse(localStorage.getItem("currentUser"))?.email,
          },
        ])
      );
    }
  };

  const updatePost = (postId, updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? updatedPost : post
    );
    setPosts(updatedPosts);
  };

  const deletePost = (postId) => {
    const currentPosts = JSON.parse(localStorage.getItem("posts"));
    const finalPosts = currentPosts.filter((post) => post.id !== postId);
    localStorage.setItem("posts", JSON.stringify(finalPosts));
    setPosts([...posts]);
  };

  const deleteComment = (commentId) => {
    const currentComments = JSON.parse(localStorage.getItem("comments"));
    const finalComments = currentComments.filter(
      (comment) => comment.id !== commentId
    );
    localStorage.setItem("comments", JSON.stringify(finalComments));
  };

  const value = {
    posts,
    addPost,
    updatePost,
    deletePost,
    addComment,
    deleteComment,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
