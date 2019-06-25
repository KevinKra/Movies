import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="nav-width">
        <h3>Galleria</h3>
        <ul>
          <li>Home</li>
          <li>Favorites</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}
