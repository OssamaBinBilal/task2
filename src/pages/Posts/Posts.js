import React, { useEffect, useRef, useState } from "react";
import "./posts.css";
import { useAuth } from "../../hooks/useAuth";
import { usePosts } from "../../hooks/usePosts";

import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit, FiSave } from "react-icons/fi";
import Sidebar from "../../components/Sidebar/Sidebar";
import Mainbar from "../../components/Mainbar/Mainbar";

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
