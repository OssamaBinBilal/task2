import PostContent from "../PostContent/PostContent";

const Post = ({ post, isCustom }) => {
  return (
    <div
      key={post.id}
      style={{
        color: "#3b5998",
      }}
      className="my-5 rounded"
    >
      <h6
        className="font-weight-bold px-3 py-2 rounded-top"
        style={{ backgroundColor: "#f7f7f7", display: "inline" }}
      >
        {`${post.nameOfUser} - ${post.userEmail}`}
      </h6>
      <PostContent post={post} isCustom={isCustom} />
    </div>
  );
};

export default Post;
