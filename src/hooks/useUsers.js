import { useState, useEffect } from "react";
import { fetchUsers } from "../apiHandlers/apiHandlers";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers.then((response) => setUsers(response));
  }, []);

  const addUser = (email, username, password, currentPassword) => {
    if (
      email === "" ||
      username === "" ||
      password === "" ||
      currentPassword === ""
    )
      return 400;
    if (currentPassword !== password) return 422;

    const currentUsers = JSON.parse(localStorage.getItem("users"));

    if (currentUsers) {
      const emailAlreadyTaken =
        currentUsers.filter((user) => user.email === email).length > 0;

      const usernameAlreadyTaken =
        currentUsers.filter((user) => user.username === username).length > 0;

      if (emailAlreadyTaken) return 403;
      if (usernameAlreadyTaken) return 405;

      localStorage.setItem(
        "users",
        JSON.stringify([
          ...currentUsers,
          {
            email,
            username,
            password,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            email,
            username,
            password,
          },
        ])
      );
    }

    return 200;
  };

  return {
    users,
    addUser,
  };
};

export default useUsers;
