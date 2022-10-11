export const categoryReducers = (state, action) => {
  const { type } = action;

  switch (type) {
    case "create category":
      return { ...state };
    default:
      return state;
  }
};
