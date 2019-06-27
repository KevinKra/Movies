import React, { Component } from "react";
import "./MainPage.scss";
import HeroContent from "../HeroContent/HeroContent";
import Carousel from "../Carousel/Carousel";
import HeroGrid from "../HeroGrid/HeroGrid";
import Footer from "../Footer/Footer";

class MainPage extends Component {
  render() {
    return (
      <main className="MainPage">
        <HeroContent />
        <section className="main-content">
          <Carousel />
          <HeroGrid />
          <Carousel />
          <Carousel />
        </section>
        <Footer />
      </main>
    );
  }
}

export default MainPage;
