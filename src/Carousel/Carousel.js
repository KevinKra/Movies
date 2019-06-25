import React, { Component, Fragment } from "react";
import "./Carousel.scss";
import MovieCard from "../MovieCard/MovieCard";

export class Carousel extends Component {
  state = {
    extendInfo: false
  };

  toggleExtendInfo = () => {
    const toggle = this.state.extendInfo;
    this.setState({ extendInfo: !toggle });
  };

  render() {
    return (
      <section className="carousel-container" data-aos="fade-left">
        <h4>Name</h4>
        <div className="carousel">
          <MovieCard name="1" extendInfo={this.toggleExtendInfo} />
          <MovieCard name="2" extendInfo={this.toggleExtendInfo} />
          <MovieCard name="3" extendInfo={this.toggleExtendInfo} />
        </div>
      </section>
    );
  }
}

export default Carousel;
