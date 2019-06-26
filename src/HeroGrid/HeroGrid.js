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
        <div className="item1" style={this.divStyle(image1, "center")}>
          <p>Documentaries</p>
        </div>
        <div className="item2" style={this.divStyle(image3, "center top")}>
          <p>For all ages</p>
        </div>
        <div className="item3" style={this.divStyle(image6, "center")}>
          <p>Music Videos</p>
        </div>
        <div className="item4" style={this.divStyle(image4, "center")}>
          <p>Live TV</p>
        </div>
        <div className="item5" style={this.divStyle(image2, "center")}>
          <p>Watch Horror films</p>
        </div>
        <div className="item6" style={this.divStyle(image5, "center")}>
          <p>Galleria Originals</p>
        </div>
      </div>
    );
  }
}

export default HeroGrid;
