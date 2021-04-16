import { DARK_MODE } from "../actions/types";

const themeReducer = (state = false, action) => {
  switch (action.type) {
    case DARK_MODE:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
