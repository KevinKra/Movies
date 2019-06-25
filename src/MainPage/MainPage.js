import React, { Component } from "react";
import "./MainPage.scss";
import HeroContent from "../HeroContent/HeroContent";
import Carousel from "../Carousel/Carousel";
import HeroGrid from "../HeroGrid/HeroGrid";

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <HeroContent />
        <Carousel />
        <HeroGrid />
        <Carousel />
        <Carousel />
      </div>
    );
  }
}

export default MainPage;
