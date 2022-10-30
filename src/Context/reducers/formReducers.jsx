export const formReducers = (state, action) => {
  const { type, data, image } = action;
  const { inputArray, endpoint } = action;

  switch (type) {
    case "FORM_INPUTS_DATA":
      return { ...state, data };
    case "IMAGE_UPLOAD":
      return { ...state, image };
    case "REMOVE_IMAGE_OBJECT":
      return delete state.image;
    case "POPULATE_FORM_DATA":
      return { ...state, inputArray, endpoint, image: null };
    default:
      return state;
  }
};
