import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default class NavBar extends Component {
  state = {
    opacity: false
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      let scroll = {
        y: supportPageOffset
          ? window.pageYOffset
          : isCSS1Compat
          ? document.documentElement.scrollTop
          : document.body.scrollTop
      };

      scroll.y > 5
        ? this.setState({ opacity: true })
        : this.setState({ opacity: false });
    });
  }
  render() {
    return (
      <nav className={`NavBar ${this.state.opacity ? "solid" : "transparent"}`}>
        <div className="nav-width">
          <h3>Galleria</h3>
          <div className="nav-links">
            <NavLink to="/" activeClassName="selected">
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
