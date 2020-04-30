import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getUsers } from "../store/actions/userAction";

export default () => {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const fetchUsers = () => {
    dispatch(getUsers());
  };

  return (
    <>
      <h1>User List Page</h1>
      <button onClick={fetchUsers}>Get Users</button>
      <br />
      {users.map((user) => {
        return (
          <Link to={`/${user.id}`}>
            <p>{user.name}</p>
          </Link>
        );
      })}
    </>
  );
};
