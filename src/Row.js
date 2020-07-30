import React, { useState,useEffect } from 'react'
import instance from "./axios"
import "./Row.css"

const baseUrl = "https://image.tmdb.org/t/p/original"
function Row(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {

        async function fetchData(){
            const request = await instance.get(props.fetchUrl)
            setMovies(request.data.results)
            return request  
        }
        fetchData()
        // return () => {
            // }
        }, [props.fetchUrl])
        console.table(movies)
    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="row__posters">
                {
                    movies.map((movie,i) => {
                      return (
                        <div key={i}>
                        <img
                        className="row__poster"
                        src={`${baseUrl}${movie.poster_path} `} alt={movie.name}/>
                         </div>
                      )
                    })
                }
            </div>
        </div>
    )
}

export default Row
