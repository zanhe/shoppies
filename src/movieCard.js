import React, {useState} from "react";

export default function MovieCard({movies}){
    
    return(
        <div className="card">
            <img className="card--image"
                    src={movies.Poster} alt={movies.Title + 'poster' }/>
            <div className="card-content">
                <h3 className="card--title">{movies.Title}</h3>
                <p><small>Release Date: {movies.Released}</small></p>
                <p><small>IMDB Rating : {movies.imdbRating}</small></p>
                <p className="card--desc">{movies.Plot}</p>
                <button className='card--button' >Add Movie to Nomination</button>
            </div>
        </div>
    )
}
