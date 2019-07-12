import * as reducers from "./allReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  landingContent: reducers.landingContent
});
