const initialState = {
  users: ["orion-fox"],
  user: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload.users };
    case "GET_USER_DETAIL":
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
}

export default userReducer;
