import { useEffect, useState } from 'react';
import MovieCards from '../components/MovieCards';
import {createFetchForTrending} from '../services/fetchAPI'

export default function HomePage(){
    const [moviesList, setMoviesList] = useState(null);
 
    useEffect(() => {
        createFetchForTrending().then(setMoviesList);
    }, []);

    return(
        <MovieCards moviesList={moviesList}/>
    )
}