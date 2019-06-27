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
        x: supportPageOffset
          ? window.pageXOffset
          : isCSS1Compat
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft,
        y: supportPageOffset
          ? window.pageYOffset
          : isCSS1Compat
          ? document.documentElement.scrollTop
          : document.body.scrollTop
      };

      if (scroll.y > 25) {
        this.setState({ opacity: true });
      }
      if (scroll.y === 0) {
        this.setState({ opacity: false });
      }
    }); //ms
  }
  render() {
    return (
      <nav
        className={`NavBar ${this.state.opacity ? "solid" : "transparent"}`}
        onScroll={() =>
          function() {
            console.log("hello");
          }
        }
      >
        <div className="nav-width">
          <h3>Galleria</h3>
          <div className="NavLinks">
            <NavLink to="/home" activeClassName="selected">
              Home
            </NavLink>
            <NavLink to="/Favorites" activeClassName="selected">
              Favorites
            </NavLink>
            <NavLink to="/Login" activeClassName="selected">
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
