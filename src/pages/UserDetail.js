import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserDetail } from "../store/actions/userAction";

export default () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserDetail(userId));
  }, []);

  return (
    <>
      <h1>User Detail Page</h1>
      {/* {JSON.stringify(user)} */}
      <p>{user && user.name}</p>
      <p>{user && user.email}</p>
    </>
  );
};
