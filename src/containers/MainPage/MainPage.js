import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions/";
import * as apiCalls from "../../api/apiCalls";
import "./MainPage.scss";
import HeroContent from "../../components/HeroContent/HeroContent";
import Carousel from "../../components/Carousel/Carousel";
import HeroGrid from "../../components/HeroGrid/HeroGrid";
import Footer from "../../components/Footer/Footer";

class MainPage extends Component {
  componentDidMount = async () => {
    this.fetchData();
  };

  fetchData = async () => {
    this.props.landingContent.length === 0 &&
      this.storeData(await apiCalls.fetchAllContent());
  };

  storeData = data => {
    this.props.addLandingContent(data);
  };

  render() {
    return (
      <main className="MainPage">
        <HeroContent />
        <section className="main-content">
          {this.props.landingContent.map((element, i) => {
            return (
              <Carousel title={element.format} films={element.movies} key={i} />
            );
          })}
          <HeroGrid />
        </section>
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = store => ({
  landingContent: store.landingContent
});

const mapDispatchToProps = dispatch => ({
  addLandingContent: content => dispatch(actions.addLandingContent(content))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
