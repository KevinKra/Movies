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

export const actionMovies = (state = [], action) => {
  switch (action.type) {
    case "ADD_ACTION_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

export const classicMovies = (state = [], action) => {
  switch (action.type) {
    case "ADD_CLASSIC_MOVIES":
      return action.payload;
    default:
      return state;
  }
};
