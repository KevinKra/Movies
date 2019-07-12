export const popularMovies = (state = [], action) => {
  switch (action.type) {
    case "ADD_POPULAR_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

export const trendingMovies = (state = [], action) => {
  switch (action.type) {
    case "ADD_TRENDING_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

export const trendingShows = (state = [], action) => {
  switch (action.type) {
    case "ADD_TRENDING_SHOWS":
      return action.payload;
    default:
      return state;
  }
};
