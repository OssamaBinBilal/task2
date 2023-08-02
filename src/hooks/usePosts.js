import React, { createContext, useContext, useState, useEffect } from "react";
import { retrievePostsWithUsers } from "../apiHandlers/apiHandlers";

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
  const [receivedPosts, setReceivedPosts] = useState([]);

  useEffect(() => {
    retrievePostsWithUsers
      .then((response) => {
        setReceivedPosts(response);
        setPosts(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const addPost = (title, body) => {
    let idToAssign = getLatestId("latestPostId");
    const userEmail = JSON.parse(localStorage.getItem("currentUser"))?.email;
    const nameOfUser = JSON.parse(
      localStorage.getItem("currentUser")
    )?.username;
    retrievePostsWithUsers()
      .then((response) => {
        setReceivedPosts(response);
        setPosts(response);
      })
      .catch((error) => console.log(error));

    const id = idToAssign;
    if (!localStorage.getItem("posts")) {
      setPosts([
        ...receivedPosts,
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
        ...receivedPosts,
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

  const editPost = (postId, title, body) => {
    const currentPosts = JSON.parse(localStorage.getItem("posts"));
    const finalPosts = currentPosts.map((post) => {
      if (post.id === postId) {
        post.title = title;
        post.body = body;
      }
      return post;
    });

    setPosts([...receivedPosts, finalPosts]);
    localStorage.setItem("posts", JSON.stringify(finalPosts));
  };

  const editComment = (commentId, body) => {
    const currentComments = JSON.parse(localStorage.getItem("comments"));
    const finalComments = currentComments.map((comment) => {
      if (comment.id === commentId) {
        comment.body = body;
      }
      return comment;
    });

    localStorage.setItem("comments", JSON.stringify(finalComments));
  };

  const value = {
    posts,
    addPost,
    deletePost,
    addComment,
    deleteComment,
    editPost,
    editComment,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
