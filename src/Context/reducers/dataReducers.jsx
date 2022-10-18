export const dataReducers = (state, action) => {
  const { type, userData } = action;

  switch (type) {
    case "FETCHING_USER_DATA":
      return { ...state, userData, role: userData.role };
    default:
      return state;
  }
};
