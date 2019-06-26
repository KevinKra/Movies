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
      backgroundSize: "cover"
    };
  };
  render() {
    return (
      <div className="HeroGrid" data-aos="fade-right">
        <div className="grid-1-container">
          <div
            className="grid-item"
            style={this.divStyle(image1, "center center")}
          />
          <h3 className="grid-title">Documentaries</h3>
        </div>
        <div className="grid-2-container">
          <div
            className="grid-item"
            style={this.divStyle(image3, "center center")}
          />
          <h3 className="grid-title">For All Ages</h3>
        </div>
        <div className="grid-3-container">
          <div
            className="grid-item"
            style={this.divStyle(image6, "center center")}
          />
          <h3 className="grid-title">Music Videos</h3>
        </div>
        <div className="grid-4-container">
          <div
            className="grid-item"
            style={this.divStyle(image4, "center center")}
          />
          <h3 className="grid-title">Live TV</h3>
        </div>
        <div className="grid-5-container">
          <div
            className="grid-item"
            style={this.divStyle(image2, "center center")}
          />
          <h3 className="grid-title">Watch Horror Films</h3>
        </div>
        <div className="grid-6-container">
          <div
            className="grid-item"
            style={this.divStyle(image5, "center center")}
          />
          <h3 className="grid-title">Galleria Originals</h3>
        </div>
      </div>
    );
  }
}

export default HeroGrid;
