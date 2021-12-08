import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // appel api
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}

export default UserList;
