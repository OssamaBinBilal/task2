import React from "react";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../atoms/Button";

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
      <Button classes="w-100 mb-3" text="MY POSTS" onClick={handleMyPosts} />
      <Button classes="w-100 mb-3" text="ALL POSTS" onClick={handleAllPosts} />
      <Button classes="w-100 mb-3" text="LOGOUT" onClick={handleLogout} />
    </div>
  );
};

export default Sidebar;
