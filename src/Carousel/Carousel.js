import React, { Component } from "react";
import "./Carousel.scss";
import MovieCard from "../MovieCard/MovieCard";
import InfoExtend from "../InfoExtend/InfoExtend";

export class Carousel extends Component {
  state = {
    extendInfo: false,
    hovering: false,
    currentSelection: 1,
    films: [1, 2, 3]
  };

  expandExtendInfo = () => {
    this.setState({ extendInfo: true });
  };

  collapseExtendInfo = () => {
    this.setState({ extendInfo: false });
  };

  handleMouseOver = () => {
    this.setState({ hovering: true });
  };

  handleMouseOut = () => {
    this.setState({ hovering: false });
  };

  //proof of concept, will need to dump/modify with proper data.
  updateSelection = number => {
    this.setState({ currentSelection: number, extendInfo: true });
  };

  //proof of concept, will need to dump/modify with proper data.
  renderExtData = () => {
    return this.state.movies[this.state.currentSelection - 1];
  };

  renderCards = () => {
    if (!this.props.films || this.props.films.length === 0) {
      console.log("empty");
    } else {
      console.log("data", this.props.films);
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
        //!== READ -- BUG !==
        // onMouseLeave function collapses the container when the user leaves the section,
        // however, it also triggers a rerender of it's children resulting in
        // an unwanted extra firing of the renderCards() function. Consider moving this
        // function elsewhere.
        // ===========
        // onMouseLeave={this.collapseExtendInfo}
        className={`carousel-container ${
          this.state.extendInfo || this.state.hovering
            ? "carousel-expanded"
            : "carousel-collapse"
        }`}
      >
        <h4>{this.props.title || "name"}</h4>
        <div className="carousel">{this.renderCards()}</div>
        {this.state.extendInfo || this.state.hovering ? (
          <InfoExtend
            handleMouseOut={this.handleMouseOut}
            handleMouseOver={this.handleMouseOver}
            renderExtData={this.renderExtData}
          />
        ) : null}
      </section>
    );
  }
}

export default Carousel;
