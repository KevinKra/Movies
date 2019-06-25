import React, { Component } from "react";
import "./MovieCard.scss";

export class MovieCard extends Component {
  state = {
    showData: false
  };
  handleHover = () => {
    const toggle = this.state.showData;
    this.setState({ showData: !toggle });
  };
  render() {
    return (
      <div
        tabIndex="0"
        className="MovieCard"
        onFocus={this.props.extendInfo}
        onBlur={this.props.extendInfo}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <div className={`overlay ${this.state.showData ? "fadeIn" : "hidden"}`}>
          <i>X</i>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            provident commodi, cumque voluptate blanditiis similique tempora
            debitis aperiam sunt cum iusto quos ipsum architecto vel alias
            quaerat ut reprehenderit quod?
          </p>
        </div>
        <h4 className={`overlay ${this.state.showData ? "hidden" : "fadeIn"}`}>
          Movie Card {this.props.name}
        </h4>
      </div>
    );
  }
}

export default MovieCard;
