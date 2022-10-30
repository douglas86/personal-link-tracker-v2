export const dataReducers = (state, action) => {
  const { type, userData, categoryData } = action;
  const { len, pagination } = action;

  switch (type) {
    case "FETCHING_INITIAL_DATA":
      return { ...state, role: userData.role, userData, categoryData };
    case "FETCHING_CATEGORY_DATA":
      return {
        ...state,
        category: [],
      };
    case "UPDATING_CATEGORY_PAGE":
      return { ...state, len, pagination };
    default:
      return state;
  }
};
