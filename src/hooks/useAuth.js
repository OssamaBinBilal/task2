import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    const registeredUsers = JSON.parse(localStorage.getItem("users"));
    if (!registeredUsers) return 401;

    const attemptedUser = registeredUsers.filter(
      (user) => user.email === email && user.password === password
    )[0];

    if (attemptedUser) {
      setUser(attemptedUser);
      localStorage.setItem("currentUser", JSON.stringify(attemptedUser));
      return 200;
    } else {
      return 401;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user]);

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
