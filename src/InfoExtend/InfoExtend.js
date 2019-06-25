import React from "react";
import "./InfoExtend.scss";

export default function InfoExtend(props) {
  return (
    <div
      className="box"
      onMouseOver={props.handleMouseOver}
      onMouseLeave={props.handleMouseOut}
    >
      <h1>content: {props.renderExtData()}</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
    </div>
  );
}
