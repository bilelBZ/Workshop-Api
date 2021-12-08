import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

function Details() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {loading ? (
        "osber chwaya .. "
      ) : (
        <div>
          <h1>{user.address.street}</h1>
          <h1>{user.phone}</h1>
        </div>
      )}
    </div>
  );
}

export default Details;
