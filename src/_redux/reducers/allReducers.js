export const landingContent = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIES_SHOWS":
      return action.payload;
    default:
      return state;
  }
};
