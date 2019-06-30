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
            <h1>{props.information.title}</h1>
            <p>{props.information.overview}</p>
            <p>{props.information.vote_average}</p>
            <p>{props.information.original_language}</p>
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
