import React from "react";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../atoms/Button";

const Sidebar = () => {
  const { logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="col-md-3 p-3">
      <Button classes="w-100 mb-3" text="LOGOUT" onClick={handleLogout} />
    </div>
  );
};

export default Sidebar;
