import React from "react";
import "./InfoExtend.scss";

export default function InfoExtend(props) {
  const backgroundImage = `https://image.tmdb.org/t/p/w1280${
    props.information.backdrop_path
  }`;
  return (
    <article
      className="expansion-container"
      style={props.extendInfo ? { height: "500px" } : { height: "0px" }}
    >
      <div className="background-image">
        <div className="img-gradient">
          <section>
            <h1>{props.information.title || props.information.name}</h1>
            <p className="overview">{props.information.overview}</p>
            <div className="support">
              <p>Average Rating: {props.information.vote_average}</p>
              <p className="language">{props.information.original_language}</p>
            </div>
          </section>
        </div>
        <img src={backgroundImage} alt="" />
        {/* <img
          src={
            "https://image.tmdb.org/t/p/original/m67smI1IIMmYzCl9axvKNULVKLr.jpg" ||
            backgroundImage
          }
          alt=""
        /> */}
      </div>
    </article>
  );
}
