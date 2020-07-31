import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "./trailer";
import instance from "./axios";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import genre from "./genres";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
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
    height: "650",
    width: "1000",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onHoverPlayVideo = (movie) => {
    setMovie(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParams", urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  console.log("object", movie);
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
      {trailerUrl && (
        <div className="trailer__wrapper">
          <div className="trailer__bleed"></div>
          <div className="trailer__contents">
            <div className="trailer__name">{movie.name}</div>
            <div className="trailer__spans">
              <span className="trailer__ratings">
                Rating : {movie.vote_average}
              </span>
              <span className="trailer__ratings">
                Popularity : {movie.popularity} %
              </span>
            </div>

            <div className="trailer__buttons">
              <button className="trailer__button--white">
                <BsFillPlayFill className="trailer__icon--play" /> Play
              </button>
              <button className="trailer__button--grey">
                <AiOutlineInfoCircle className="trailer__icon--play" />
                More Info
              </button>
            </div>
            <div className="trailer__description">{movie.overview}</div>

            <div className="trailer__genres">
              Genre :{" "}
              {movie?.genre_ids.map(id => {
                return <span>{genre[id]}, {" "}</span>
                
              })}
            </div>
          </div>
          <div className="trailerVideo__wrapper">
            <YouTube videoId={trailerUrl} opts={opts} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Row;
