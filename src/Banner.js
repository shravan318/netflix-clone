import React, { useState, useEffect } from "react";
import instance from "./axios";
import requests from "./requests";
import "./banner.css"

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      console.log();
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner__wrapper"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button--white">Play</button>
          <button className="banner__button--grey">My List</button>
        </div>
        <h3 className="banner__description">
            {movie?.overview}
        </h3>
      </div>
    </header>
  );
}
export default Banner;
