import { useState, useEffect } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const retrieveUsers = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
        .then((response) => response.text())
        .then((result) => setUsers(JSON.parse(result)))
        .catch((error) => console.log("error", error));
    };

    retrieveUsers();
  }, []);

  return {
    users,
  };
};

export default useUsers;
