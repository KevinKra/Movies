import React, { Component } from "react";
import "./Carousel.scss";
import MovieCard from "../MovieCard/MovieCard";
import infoExtend from "../InfoExtend/InfoExtend";
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
    return this.state.films[this.state.currentSelection - 1];
  };

  render() {
    return (
      <section
        onMouseLeave={this.collapseExtendInfo}
        className={`carousel-container ${
          this.state.extendInfo || this.state.hovering
            ? "carousel-expanded"
            : "carousel-collapse"
        }`}
      >
        <h4>Name</h4>
        <div className="carousel">
          {this.state.films.map((film, i) => {
            return (
              <MovieCard
                name={film}
                key={i}
                expandExtendInfo={this.expandExtendInfo}
                // collapseExtendInfo={this.collapseExtendInfo}
                toggle={this.toggle}
                updateSelection={this.updateSelection}
              />
            );
          })}
        </div>
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
