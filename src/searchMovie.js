
import React, {useState} from "react";
import MovieCard from './movieCard.js';

export default function SearchMovies(){

    //states -  input query, movies 
    const [query, setQuery] = useState(''); 

    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        // console.log("adfs");

        const url = `http://www.omdbapi.com/?apikey=811f1004&t=${query}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data)
            console.log(data)
        }catch(err){
            console.error(err);
        } 
    }

    return(
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlF or="query"> Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Me Before You" 
                    value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                <MovieCard movies={movies}  key={movies.id}/>
            </div>
        </>
    )
}