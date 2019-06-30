import React from "react";
import * as utils from "../utils/";
import "./HeroContent.scss";

export const HeroContent = props => {
  const selectFromPool = () => {
    if (!props.films || props.films.length !== 0) {
      const index = Math.floor(Math.random() * (props.films.length - 1));
      const movie = props.films[index];
      return (
        <section className="HeroContent">
          <div
            className="hero-image"
            style={utils.divStyle(
              `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
              "center top"
            )}
          />
          <div className="opacity-filter" />
          <div className="hero-movie-details">
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
            <button>Watch</button>
          </div>
          <div className="hero-movie-support">
            <button>More</button>
          </div>
        </section>
      );
    }
  };
  return <React.Fragment>{selectFromPool()}</React.Fragment>;
};

export default HeroContent;
