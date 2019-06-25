import React, { Component, Fragment } from "react";
import "./Carousel.scss";
import MovieCard from "../MovieCard/MovieCard";

export class Carousel extends Component {
  render() {
    return (
      <section className="carousel-container">
        <h4>Name</h4>
        <div className="carousel">
          <MovieCard />
        </div>
      </section>
    );
  }
}

export default Carousel;
