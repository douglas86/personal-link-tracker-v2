export const alertsReducers = (state, action) => {
  const { type, status, message } = action;

  switch (type) {
    case "ADD_ALERT":
      return {
        ...state,
        showAlert: true,
        status,
        message,
      };
    case "CHANGE_ALERT_STATUS":
      return {
        ...state,
        showAlert: false,
      };
    default:
      return state;
  }
};
