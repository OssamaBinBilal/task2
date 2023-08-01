import { usePosts } from "../../hooks/usePosts";

import CreatePostForm from "../CreatePostForm/CreatePostForm";
import PostList from "../PostList/PostList";

const Mainbar = () => {
  const { posts } = usePosts();

  return (
    <>
      <CreatePostForm />
      <PostList posts={posts} />
    </>
  );
};

export default Mainbar;
