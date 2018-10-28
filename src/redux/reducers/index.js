import { combineReducers } from "redux";

export default combineReducers({
  init: require("./init").reducer
});
