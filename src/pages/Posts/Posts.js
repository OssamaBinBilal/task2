import Sidebar from "../../components/Sidebar/Sidebar";
import Mainbar from "../../components/Mainbar/Mainbar";
import "./posts.css";

const Posts = () => {
  return (
    <div className="container w-lg-50">
      <div className="row mt-3">
        <Sidebar />
        <div className="p-3 col-md-9">
          <Mainbar />
        </div>
      </div>
    </div>
  );
};

export default Posts;
