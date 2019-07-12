export const addPopularMovies = movies => ({
  type: "ADD_POPULAR_MOVIES",
  payload: movies
});

export const addTrendingMovies = movies => ({
  type: "ADD_TRENDING_MOVIES",
  payload: movies
});

export const addTrendingShows = shows => ({
  type: "ADD_TRENDING_SHOWS",
  payload: shows
});
