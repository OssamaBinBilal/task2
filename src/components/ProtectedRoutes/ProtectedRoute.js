import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(true);
  return loginStatus ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
