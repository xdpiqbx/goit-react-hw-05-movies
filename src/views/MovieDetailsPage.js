import { useEffect, useState } from 'react';
import { Link, NavLink, Route, useParams, useRouteMatch } from 'react-router-dom';
import {createFetchForFullInfo} from '../services/fetchAPI'
import Cast from './Cast'
import Reviews from './Rewiews'

export default function MovieDetailsPage(){
    const { movieId } = useParams();
    const {url, path} = useRouteMatch()
    const [movieFullInfo, setMovieFullInfo] = useState(null);
 
    useEffect(() => {
        createFetchForFullInfo(movieId).then(setMovieFullInfo)
    }, []);

    return(
        <>
            <Link to='/'>Go back</Link>
            {movieFullInfo
            ? <h1>{movieFullInfo.title || movieFullInfo.name || movieFullInfo.status_message}</h1>
            : null}
            <hr/ >
            <h3>Additional information</h3>
            <ul>
                <li><NavLink to={`${url}/cast`}>Cast</NavLink></li>         {/* /movies/:movieId/cast */}
                <li><NavLink to={`${url}/reviews`}>Reviews</NavLink></li>   {/* /movies/:movieId/reviews */}
            </ul>
            <div>
                <Route path={`${path}/cast`}>
                    <Cast />
                </Route>
                <Route path={`${path}/reviews`}>
                    <Reviews />
                </Route>
            </div>
        </>
    )
}