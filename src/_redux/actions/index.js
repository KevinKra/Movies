export const addMovies = movies => ({
  type: "ADD_MOVIES",
  payload: movies
});

export const clearMovies = movies => ({
  type: "CLEAR_MOVIES",
  payload: movies
});
