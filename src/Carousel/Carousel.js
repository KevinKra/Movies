import React, { Component } from "react";
import "./Carousel.scss";
import MovieCard from "../MovieCard/MovieCard";
import InfoExtend from "../InfoExtend/InfoExtend";

export class Carousel extends Component {
  state = {
    disabled: true,
    hovering: false
  };

  handleMouseEnter = () => {
    this.enableContent();
    this.setState({ hovering: true });
  };

  handleMouseLeave = () => {
    this.setState({ disabled: true, hovering: false });
  };

  enableContent = () => {
    setTimeout(() => {
      this.state.hovering && this.setState({ disabled: false });
    }, 500);
  };

  renderCards = () => {
    if (!this.props.films || this.props.films.length === 0) {
      console.log("empty");
    } else {
      return this.props.films.map(film => {
        return (
          <MovieCard
            name={film.title}
            overview={film.overview}
            releaseDate={film.release_date}
            voteAverage={film.vote_average}
            language={film.original_language}
            poster={film.poster_path}
            backdrop={film.backdrop_path}
            expandExtendInfo={this.expandExtendInfo}
            toggle={this.toggle}
            updateSelection={this.updateSelection}
            disabled={this.state.disabled}
            key={film.id}
            id={film.id}
          />
        );
      });
    }
  };

  render() {
    return (
      <section
        className="carousel-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <h4>{this.props.title || "name"}</h4>
        <div
          className="carousel"
          style={
            this.state.disabled
              ? { pointerEvents: "none" }
              : { pointerEvents: "auto" }
          }
        >
          {this.renderCards()}
        </div>
      </section>
    );
  }
}

export default Carousel;
