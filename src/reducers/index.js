import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import themeReducer from "./themeReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  countries: countriesReducer,
  darkTheme: themeReducer,
  form: formReducer,
});
