import { combineReducers } from "redux";
import { alert } from "./alert/alert.reducer";
import { general } from "./general/general.reducer";

const rootReducer = combineReducers({
  alert,
  general,
});

export default rootReducer;
