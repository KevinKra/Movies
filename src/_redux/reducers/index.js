import * as reducers from "./allReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  structMovies: reducers.moviesStruct
});
