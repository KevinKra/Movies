import React, { Component } from "react";
import "./MovieCard.scss";

export class MovieCard extends Component {
  state = {
    // showData: false,
    trigger: false,
    showPoster: true
  };
  handleHoverIn = () => {
    this.setState({ showPoster: false });
  };

  handleHoverOut = () => {
    this.setState({ showPoster: true, trigger: false });
  };

  determineTransition = () => {
    this.setState({ trigger: true });
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
  render() {
    const backdrop = `https://image.tmdb.org/t/p/w500/${this.props.backdrop}`;
    const poster = `https://image.tmdb.org/t/p/w185/${this.props.poster}`;
    return (
      <article
        tabIndex="0"
        className="MovieCard"
        onClick={() => this.props.updateSelection(this.props.name)}
        onMouseEnter={this.determineTransition}
        onMouseLeave={this.handleHoverOut}
        style={
          this.state.showPoster
            ? { "min-width": "166px" }
            : { "min-width": "445px" }
        }
      >
        <div className={`overlay ${this.state.showData ? "fadeIn" : "hidden"}`}>
          <h4 className="card-interaction">{this.props.name}</h4>
          <div className="filter" />
        </div>
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
