import React, { Component } from "react";
import heroImage from "../images/skateboarder.jpg";
import "./HeroContent.scss";

export class HeroContent extends Component {
  heroImage = (image, position) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: "cover"
    };
  };
  render() {
    return (
      <section className="HeroContent">
        <div
          className="hero-image"
          style={this.heroImage(heroImage, "center top")}
        />
        <div className="hero-movie-details">
          <h1>Movie Title</h1>
          <p>Something about the movie</p>
          <button>Watch</button>
        </div>
        <div className="hero-movie-support">
          <button>Details</button>
        </div>
      </section>
    );
  }
}

export default HeroContent;
