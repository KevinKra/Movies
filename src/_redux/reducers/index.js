import * as reducers from "./allReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  popularMovies: reducers.popularMovies,
  trendingMovies: reducers.trendingMovies,
  trendingShows: reducers.trendingShows
});
