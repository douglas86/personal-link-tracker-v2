export const formReducers = (state, action) => {
  const { type, data, image, radioBtn, radioName, array, defaultValue } =
    action;

  switch (type) {
    case "FORM_INPUTS_DATA":
      return { ...state, data };
    case "IMAGE_UPLOAD":
      return { ...state, image };
    case "REMOVE_IMAGE_OBJECT":
      return delete state.image;
    case "ADD_RADIO_BUTTONS":
      return { ...state, radioBtn };
    case "CHANGE_RADIO_DEFAULT":
      return {
        ...state,
        radioBtn: { ...state.radioBtn, [radioName]: { array, defaultValue } },
      };
    default:
      return state;
  }
};
