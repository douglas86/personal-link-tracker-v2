export const dataReducers = (state, action) => {
  const { type } = action;

  switch (type) {
    case "fetching data":
      return {};
    default:
      return state;
  }
};
