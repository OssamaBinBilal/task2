import { usePosts } from "../../hooks/usePosts";
import CreatePostForm from "../molecules/addPostSection/CreatePostForm/CreatePostForm";

import PostList from "../molecules/postSection/PostList/PostList";

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
