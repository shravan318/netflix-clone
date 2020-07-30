import React, { useState, useEffect } from "react";
import instance from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original";
function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);
  return (
    <div className="Row__container">
      <h2 className="genre__heading">{props.title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={props.isVertical ? "row__poster--vertical" : "row__poster--horizontal"}
              src={`${baseUrl}${props.isVertical ? movie.poster_path : movie.backdrop_path} `}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
