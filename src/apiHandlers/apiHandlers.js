const baseUrl = "https://jsonplaceholder.typicode.com";

export const retrievePostsWithUsers = new Promise(async (resolve, reject) => {
  try {
    const postsResponse = await fetch(`${baseUrl}/posts`);
    const fetchedPosts = await postsResponse.json();
    const usersResponse = await fetch(`${baseUrl}/users`);
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

    resolve(mergedArray);
  } catch (e) {
    reject(e);
  }
});

export const fetchCommentsByPost = (id) => {
  return new Promise(async (resolve, reject) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      const response = await fetch(
        `${baseUrl}/posts/${id}/comments`,
        requestOptions
      );
      const fetchedComments = await response.json();
      resolve(fetchedComments);
    } catch (e) {
      reject(e);
    }
  });
};

export const fetchUsers = new Promise(async (resolve, reject) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(`${baseUrl}/users`, requestOptions);
    const jsonResponse = await response.json();
    resolve(jsonResponse);
  } catch (e) {
    reject(e);
  }
});
