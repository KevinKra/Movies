import * as reducers from "./allReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  popularMovies: reducers.popularMovies,
  trendingMovies: reducers.trendingMovies,
  actionMovies: reducers.actionMovies,
  classicMovies: reducers.classicMovies,
  trendingShows: reducers.trendingShows,
  classicShows: reducers.classicShows
});
