import API_KEY from "./index";

export const fetchPopularMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?certification_country=US&api_key=${API_KEY}`
  );
  const movies = await response.json();
  return { format: "Popular Movies", movies: movies.results };
};

export const fetchActionMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`
  );
  const movies = await response.json();
  return { format: "Action Movies", movies: movies.results };
};

export const fetchTrendingMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}
    `
  );
  const movies = await response.json();
  return { format: "Trending Movies", movies: movies.results };
};

export const fetchTrendingShows = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}
    `
  );
  const movies = await response.json();
  return { format: "Trending Shows", movies: movies.results };
};

export const fetchClassicMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  const movies = await response.json();
  return { format: "Classic Movies", movies: movies.results };
};

export const fetchClassicShows = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1
    `
  );
  const movies = await response.json();
  return { format: "Classic Shows", movies: movies.results };
};

export const fetchAllContent = () => {
  return Promise.all([
    fetchTrendingShows(),
    fetchTrendingMovies(),
    fetchClassicShows(),
    fetchClassicMovies(),
    fetchPopularMovies(),
    fetchActionMovies()
  ]);
};
