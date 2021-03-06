import React from "react";
import * as utils from "../../_utils/";
import "./HeroGrid.scss";
import image1 from "../../_utils/images/woman-climbing.jpg";
import image2 from "../../_utils/images/man-in-forest.jpg";
import image3 from "../../_utils/images/kids-show.jpg";
import image4 from "../../_utils/images/live-game.jpg";
import image5 from "../../_utils/images/originals-kid.jpg";
import image6 from "../../_utils/images/sitting-at-car.jpg";

const HeroGrid = () => {
  return (
    <div className="HeroGrid" data-aos="fade-right">
      <section className="grid-1-container">
        <div
          className="grid-item"
          style={utils.divStyle(image1, "center center")}
        />
        <h3 className="grid-title">Groundbreaking</h3>
        <p className="grid-para">DOCUMENTARIES</p>
      </section>
      <section className="grid-2-container">
        <div
          className="grid-item"
          style={utils.divStyle(image3, "bottom bottom")}
        />
        <h3 className="grid-title">For All Ages</h3>
        <p className="grid-para">KIDS</p>
      </section>
      <section className="grid-3-container">
        <div
          className="grid-item"
          style={utils.divStyle(image6, "center center")}
        />
        <h3 className="grid-title">Latest and Greatest</h3>
        <p className="grid-para">MUSIC VIDEOS</p>
      </section>
      <section className="grid-4-container">
        <div
          className="grid-item"
          style={utils.divStyle(image4, "center bottom")}
        />
        <h3 className="grid-title">Your Favorite Sports</h3>
        <p className="grid-para">LIVE TV</p>
      </section>
      <section className="grid-5-container">
        <div
          className="grid-item"
          style={utils.divStyle(image2, "center center")}
        />
        <h3 className="grid-title">New and Classic</h3>
        <p className="grid-para">SHOWS</p>
      </section>
      <section className="grid-6-container">
        <div
          className="grid-item"
          style={utils.divStyle(image5, "center center")}
        />
        <h3 className="grid-title">Revolutionary</h3>
        <p className="grid-para">GALLERIA ORIGINALS</p>
      </section>
    </div>
  );
};

export default HeroGrid;
