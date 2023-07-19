import { useState, useEffect } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const retrievePosts = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then((response) => response.text())
        .then((result) => setPosts(JSON.parse(result)))
        .catch((error) => console.log("error", error));
    };

    retrievePosts();
  }, []);

  const addPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
  };

  const updatePost = (postId, updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? updatedPost : post
    );
    setPosts(updatedPosts);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return {
    posts,
    addPost,
    updatePost,
    deletePost,
  };
};

export default usePosts;
