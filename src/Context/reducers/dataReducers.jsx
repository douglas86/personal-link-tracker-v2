export const dataReducers = (state, action) => {
  const { type, userData } = action;

  switch (type) {
    case "fetching user data":
      return { ...state, userData, role: userData.role };
    default:
      return state;
  }
};
