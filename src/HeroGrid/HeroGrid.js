import React, { Component } from "react";
import "./HeroGrid.scss";
import image1 from "../images/woman-climbing.jpg";
import image2 from "../images/man-in-forest.jpg";
import image3 from "../images/kids-show.jpg";
import image4 from "../images/live-game.jpg";
import image5 from "../images/originals-kid.jpg";
import image6 from "../images/sitting-at-car.jpg";

class HeroGrid extends Component {
  divStyle = (image, position) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
  };
  render() {
    return (
      <div className="HeroGrid" data-aos="fade-right">
        <section className="grid-1-container">
          <div
            className="grid-item"
            style={this.divStyle(image1, "center center")}
          />
          <h3 className="grid-title">Groundbreaking</h3>
          <p className="grid-para">DOCUMENTARIES</p>
        </section>
        <section className="grid-2-container">
          <div
            className="grid-item"
            style={this.divStyle(image3, "bottom bottom")}
          />
          <h3 className="grid-title">For All Ages</h3>
          <p className="grid-para">KIDS</p>
        </section>
        <section className="grid-3-container">
          <div
            className="grid-item"
            style={this.divStyle(image6, "center center")}
          />
          <h3 className="grid-title">Latest and Greatest</h3>
          <p className="grid-para">MUSIC VIDEOS</p>
        </section>
        <section className="grid-4-container">
          <div
            className="grid-item"
            style={this.divStyle(image4, "center bottom")}
          />
          <h3 className="grid-title">Your Favorite Sports</h3>
          <p className="grid-para">LIVE TV</p>
        </section>
        <section className="grid-5-container">
          <div
            className="grid-item"
            style={this.divStyle(image2, "center center")}
          />
          <h3 className="grid-title">New and Classic</h3>
          <p className="grid-para">SHOWS</p>
        </section>
        <section className="grid-6-container">
          <div
            className="grid-item"
            style={this.divStyle(image5, "center center")}
          />
          <h3 className="grid-title">Revolutionary</h3>
          <p className="grid-para">GALLERIA ORIGINALS</p>
        </section>
      </div>
    );
  }
}

export default HeroGrid;
