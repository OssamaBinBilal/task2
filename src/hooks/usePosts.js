import { useState, useEffect } from "react";

const usePosts = () => {
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

    const listOfComments = Promise.all(
      fetchedPosts.map(async (post) => {
        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        );
        return commentsResponse;
      })
    );

    const listOfResults = await listOfComments;

    listOfResults.forEach((promise) => console.log(promise.json()));

    const mergedArray = fetchedPosts.map((post) => {
      return {
        ...post,
        username: fetchedUsers.filter((user) => user.id === post.userId)[0]
          .username,
        nameOfUser: fetchedUsers.filter((user) => user.id === post.userId)[0]
          .name,
        userEmail: fetchedUsers.filter((user) => user.id === post.userId)[0]
          .email,
        // comments: await commentsResponse.json(),
      };
    });

    setPosts(mergedArray);
  };

  useEffect(() => {
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
