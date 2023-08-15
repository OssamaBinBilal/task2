import { usePosts } from "../../hooks/usePosts";
import CreatePostForm from "../molecules/addPostSection/CreatePostForm/CreatePostForm";

import PostList from "../molecules/postSection/PostList/PostList";

const Mainbar = () => {
  const { receivedPosts } = usePosts();

  return (
    <>
      <CreatePostForm />
      <PostList posts={receivedPosts} />
    </>
  );
};

export default Mainbar;
