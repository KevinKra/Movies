import React, { Component } from "react";
import * as utils from "../utils/";
import heroImage from "../images/skateboarder.jpg";
import "./HeroContent.scss";

export class HeroContent extends Component {
  render() {
    return (
      <section className="HeroContent">
        <div
          className="hero-image"
          style={utils.divStyle(heroImage, "center top")}
        />
        <div className="hero-movie-details">
          <h1>Movie Title</h1>
          <p>
            Something about the movie, it could be a lot of things or even just
            a short little snipper regarding the cast or plot. Honestly, who
            knows at this point. Time will tell.
          </p>
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
