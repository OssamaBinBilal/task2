import Post from "../Post/Post";

const PostList = ({ posts }) => {
  return (
    <div
      className="overflow-y-auto pe-3"
      style={{
        maxHeight: "65vh",
        borderRadius: "5px",
      }}
    >
      {JSON.parse(localStorage.getItem("posts"))
        ?.reverse()
        .map((customPost) => (
          <Post key={customPost.id} post={customPost} isCustom={true} />
        ))}
      {posts.map((post) => (
        <Post key={post.id} post={post} isCustom={false} />
      ))}
    </div>
  );
};

export default PostList;
