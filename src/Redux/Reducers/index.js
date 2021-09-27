import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./login";

const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
});

export default allReducers;
