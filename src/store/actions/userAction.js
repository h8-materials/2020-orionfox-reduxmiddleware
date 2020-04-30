export function getUsers() {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_USERS",
          payload: {
            users: data,
          },
        });
      });
  };
}

export function getUserDetail(userId) {
  return (dispatch) => {
    fetch(`http://localhost:3001/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_USER_DETAIL",
          payload: {
            user: data,
          },
        });
      });
  };
}
