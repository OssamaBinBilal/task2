import React from "react";
import { useAuth } from "../../hooks/useAuth";
import SidebarButton from "../SidebarButton/SidebarButton";

const Sidebar = () => {
  const { logout } = useAuth();

  const handleMyPosts = () => console.log("MY POSTS");
  const handleAllPosts = () => console.log("ALL POSTS");
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="col-md-3 p-3">
      <SidebarButton text="MY POSTS" onClick={handleMyPosts} />
      <SidebarButton text="ALL POSTS" onClick={handleAllPosts} />
      <SidebarButton text="LOGOUT" onClick={handleLogout} />
    </div>
  );
};

export default Sidebar;
