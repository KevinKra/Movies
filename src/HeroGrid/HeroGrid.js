import React, { Component } from "react";
import "./HeroGrid.scss";

class HeroGrid extends Component {
  render() {
    return (
      <div className="HeroGrid">
        <h3 className="item1">GridItem 1</h3>
        <h3 className="item2">GridItem 2</h3>
        <h3 className="item3">GridItem 3</h3>
        <h3 className="item4">GridItem 4</h3>
        <h3 className="item5">GridItem 5</h3>
        <h3 className="item6">GridItem 6</h3>
      </div>
    );
  }
}

export default HeroGrid;
