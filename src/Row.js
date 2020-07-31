import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import instance from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onHoverPlayVideo = (movie) => {
    console.log("MOVIE",movie)
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_name || "")
      .then((url) => {
        console.log("urlParams",movie)
        // const urlParams = new URLSearchParams(new URL(url).search);
        // console.log("urlParams",urlParams.get("v"))
        // setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="Row__container">
      <h2 className="genre__heading">{props.title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={
                props.isVertical
                  ? "row__poster--vertical"
                  : "row__poster--horizontal"
              }
              src={`${baseUrl}${
                props.isVertical ? movie.poster_path : movie.backdrop_path
              } `}
              alt={movie.name}
              onClick={() => onHoverPlayVideo(movie)}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
