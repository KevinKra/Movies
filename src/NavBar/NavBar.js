import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="NavBar" data-aos="fade" data-aos-anchor="#trigger-opacity">
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
