import React, { Component } from "react";
import "./MainPage.scss";
import HeroContent from "../HeroContent/HeroContent";
import Carousel from "../Carousel/Carousel";
import HeroGrid from "../HeroGrid/HeroGrid";
import Footer from "../Footer/Footer";
import API_KEY from "../api/";

class MainPage extends Component {
  state = {
    popularMovies: [],
    actionMovies: [],
    trendingMovies: [],
    trendingShows: []
  };
  componentDidMount() {
    this.fetchTrendingShows();
    this.fetchTrendingMovies();
    this.fetchPopularMovies();
    this.fetchActionMovies();
  }

  fetchPopularMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?certification_country=US&api_key=${API_KEY}`
    );
    const movies = await response.json();
    this.setState({ popularMovies: movies.results });
  };

  fetchActionMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`
    );
    const movies = await response.json();
    this.setState({ actionMovies: movies.results });
  };

  fetchTrendingMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}
      `
    );
    const movies = await response.json();
    console.log(movies);
    this.setState({ trendingMovies: movies.results });
  };

  fetchTrendingShows = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}
      `
    );
    const movies = await response.json();
    console.log(movies);
    this.setState({ trendingShows: movies.results });
  };

  render() {
    return (
      <main className="MainPage">
        <HeroContent films={this.state.movies} />
        <section className="main-content">
          <Carousel title="Popular movies" films={this.state.popularMovies} />
          <Carousel title="Trending shows" films={this.state.trendingShows} />
          <Carousel title="Trending movies" films={this.state.trendingMovies} />
          <HeroGrid />
          <Carousel title="Action movies" films={this.state.actionMovies} />
        </section>
        <Footer />
      </main>
    );
  }
}

export default MainPage;
