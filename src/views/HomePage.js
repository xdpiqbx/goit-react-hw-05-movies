import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {createFetchForTrending} from '../services/fetchAPI'

export default function HomePage(){
    const [moviesList, setMoviesList] = useState(null);
 
    useEffect(() => {
        createFetchForTrending().then(setMoviesList);
    }, []);

    return(
        <ul>
            {moviesList &&
                moviesList.results.map( movie => (
                    <li key={movie.id}>
                        <NavLink to={`/movies/${movie.id}`}>{movie.title || movie.name}</NavLink>
                    </li>
                ))
            }
        </ul>
    )
}