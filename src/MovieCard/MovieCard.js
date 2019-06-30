import React, { Component } from "react";
import "./MovieCard.scss";

export class MovieCard extends Component {
  state = {
    trigger: false,
    showPoster: true,
    displayOverlay: false
  };

  handleHoverIn = () => {
    if (!this.props.disabled) {
      this.setState({ trigger: true, showPoster: false, displayOverlay: true });
    }
  };

  handleHoverOut = () => {
    this.setState({
      showPoster: true,
      displayOverlay: false,
      trigger: false
    });
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
        onMouseOver={this.handleHoverIn}
        onMouseLeave={this.handleHoverOut}
        tabIndex="0"
        style={
          this.state.showPoster ? { minWidth: "166px" } : { minWidth: "445px" }
        }
      >
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
