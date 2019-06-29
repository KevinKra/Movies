import React, { Component } from "react";
import "./MovieCard.scss";

export class MovieCard extends Component {
  state = {
    // displayDetails: false,
    trigger: 0,
    showPoster: true,
    displayOverlay: false
  };

  handleHoverIn = () => {
    this.setState({ showPoster: false });
  };

  handleHoverOut = () => {
    this.setState({ showPoster: true, trigger: 0, displayOverlay: false });
  };

  determineTransition = () => {
    this.setState({ trigger: 1 });
    setTimeout(() => {
      if (this.state.trigger) {
        console.log("animate");
        this.setState({ showPoster: false });
      } else {
        console.log("don't animate, user moved on.");
        this.setState({ showPoster: true });
      }
    }, 500);
  };

  displayOverlay = () => {
    setTimeout(() => {
      this.setState({ displayOverlay: true, trigger: 0 });
    }, 450);
  };

  render() {
    const backdrop = `https://image.tmdb.org/t/p/w500/${this.props.backdrop}`;
    const poster = `https://image.tmdb.org/t/p/w185/${this.props.poster}`;
    const overlay = (
      <div className="overlay">
        <section className="card-content">
          <h4>{this.props.name}</h4>
          <div className="card-details">
            <p className="card-language">{this.props.language.toUpperCase()}</p>
            <p>{this.props.releaseDate}</p>
            <p>Score: {this.props.voteAverage}</p>
          </div>
        </section>
        <div className="filter" />
      </div>
    );
    return (
      <article
        className="MovieCard"
        onClick={() => this.props.updateSelection(this.props.name)}
        onMouseEnter={this.determineTransition}
        onMouseLeave={this.handleHoverOut}
        tabIndex="0"
        style={
          this.state.showPoster ? { minWidth: "166px" } : { minWidth: "445px" }
        }
      >
        {!this.state.showPoster && this.state.trigger
          ? this.displayOverlay()
          : null}
        {this.state.displayOverlay && overlay}
        {this.state.showPoster ? (
          <img className="img-fade-in" src={poster} alt="" />
        ) : (
          <img className="img-fade-in" src={backdrop} alt="" />
        )}
      </article>
    );
  }
}

export default MovieCard;
