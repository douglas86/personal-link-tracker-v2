export const formReducers = (state, action) => {
  const { type, data, image } = action;
  const { radioBtn, radioName, array } = action;
  const { defaultValue, inputArray, endpoint } = action;

  switch (type) {
    case "FORM_INPUTS_DATA":
      return { ...state, data };
    case "IMAGE_UPLOAD":
      return { ...state, image };
    case "REMOVE_IMAGE_OBJECT":
      return delete state.image;
    case "POPULATE_FORM_DATA":
      return { ...state, radioBtn, inputArray, endpoint };
    case "CHANGE_RADIO_DEFAULT":
      return {
        ...state,
        radioBtn: { ...state.radioBtn, [radioName]: { array, defaultValue } },
      };
    default:
      return state;
  }
};
