const initialState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  membership: "Classic Collector",
};

function userReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SAVE_PROFILE":
      return {
        ...state,
        ...action.payload,
      };

    case "RESET_PROFILE":
      return initialState;

    default:
      return state;
  }
}

export { initialState };
export default userReducer;