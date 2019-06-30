import React, { Component } from "react";
import "./MainPage.scss";
import HeroContent from "../HeroContent/HeroContent";
import Carousel from "../Carousel/Carousel";
import HeroGrid from "../HeroGrid/HeroGrid";
import Footer from "../Footer/Footer";
import API_KEY from "../api/";

class MainPage extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    this.callData();
  }

  callData = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?certification_country=US&api_key=${API_KEY}`
    );
    const movies = await response.json();
    this.setState({ movies: movies.results });
  };

  render() {
    return (
      <main className="MainPage">
        <HeroContent films={this.state.movies} />
        <section className="main-content">
          <Carousel title="Popular movies" films={this.state.movies} />
          <HeroGrid />
          <Carousel title="Popular movies" films={this.state.movies} />
          <Carousel title="Popular movies" films={this.state.movies} />
        </section>
        <Footer />
      </main>
    );
  }
}

export default MainPage;
