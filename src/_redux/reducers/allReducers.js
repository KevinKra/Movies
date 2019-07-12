export const moviesStruct = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIES":
      return action.addMovies;
    case "CLEAR_MOVIES":
      return action.clearMovies;
    default:
      return state;
  }
};
