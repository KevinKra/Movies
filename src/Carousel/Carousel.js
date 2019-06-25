import React, { Component } from "react";
import "./Carousel.scss";
import MovieCard from "../MovieCard/MovieCard";

export class Carousel extends Component {
  render() {
    return (
      <section className="Carousel">
        <MovieCard />
      </section>
    );
  }
}

export default Carousel;
