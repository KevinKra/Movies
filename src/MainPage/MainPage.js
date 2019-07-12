import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../_redux/actions/index";
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
    trendingShows: [],
    classicMovies: [],
    classicShows: []
  };
  componentDidMount() {
    this.fetchTrendingShows();
    this.fetchTrendingMovies();
    this.fetchPopularMovies();
    this.fetchActionMovies();
    this.fetchClassicMovies();
    this.fetchClassicShows();
  }

  fetchPopularMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?certification_country=US&api_key=${API_KEY}`
    );
    const movies = await response.json();
    this.props.addPopularMovies(movies.results);
    this.setState({ popularMovies: movies.results });
  };

  fetchActionMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`
    );
    const movies = await response.json();
    this.props.addActionMovies(movies.results);
    this.setState({ actionMovies: movies.results });
  };

  fetchTrendingMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}
      `
    );
    const movies = await response.json();
    this.props.addTrendingMovies(movies.results);
    this.setState({ trendingMovies: movies.results });
  };

  fetchTrendingShows = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}
      `
    );
    const movies = await response.json();
    this.props.addTrendingShows(movies.results);
    this.setState({ trendingShows: movies.results });
  };

  fetchClassicMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const movies = await response.json();
    this.props.addClassicMovies(movies.results);
    this.setState({ classicMovies: movies.results });
  };

  fetchClassicShows = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1
      `
    );
    const movies = await response.json();
    this.setState({ classicShows: movies.results });
  };

  render() {
    return (
      <main className="MainPage">
        <HeroContent films={this.state.movies} />
        <section className="main-content">
          <Carousel title="Popular Movies" films={this.state.popularMovies} />
          <Carousel title="Trending Shows" films={this.state.trendingShows} />
          <Carousel title="Trending Movies" films={this.state.trendingMovies} />
          <HeroGrid />
          <Carousel
            title="Timeless Classic Movies"
            films={this.state.classicMovies}
          />
          <Carousel
            title="Your Favorite Shows"
            films={this.state.classicShows}
          />
          <Carousel title="Action movies" films={this.state.actionMovies} />
        </section>
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = store => ({
  popularMovies: store.popularMovies,
  trendingMovies: store.trendingMovies,
  actionMovies: store.actionMovies,
  classicMovies: store.classicMovies,
  trendingShows: store.trendingShows
});

const mapDispatchToProps = dispatch => ({
  addPopularMovies: movies => dispatch(actions.addPopularMovies(movies)),
  addTrendingMovies: movies => dispatch(actions.addTrendingMovies(movies)),
  addActionMovies: movies => dispatch(actions.addActionMovies(movies)),
  addClassicMovies: movies => dispatch(actions.addClassicMovies(movies)),
  addTrendingShows: shows => dispatch(actions.addTrendingShows(shows))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
