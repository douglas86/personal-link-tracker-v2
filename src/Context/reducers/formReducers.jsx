export const formReducers = (state, action) => {
  const { type, data } = action;

  switch (type) {
    case "FORM_INPUTS_DATA":
      return { ...state, data };
    default:
      return state;
  }
};
