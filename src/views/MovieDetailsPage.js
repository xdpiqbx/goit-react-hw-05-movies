import { useEffect, useState } from 'react';
import { Link, NavLink, Route, useParams, useRouteMatch } from 'react-router-dom';
import {createFetchForFullInfo} from '../services/fetchAPI'
import Cast from './Cast'
import Reviews from './Reviews'
import MovieFullInfo from '../components/MovieFullInfo'

export default function MovieDetailsPage(){
    const { movieId } = useParams();
    const {url, path} = useRouteMatch()
    const [movieFullInfo, setMovieFullInfo] = useState(null);
 
    useEffect(() => {
        createFetchForFullInfo(movieId).then(setMovieFullInfo)
    }, [movieId]);

    const createGoBackPath = () => {
        //после второго вебинара разобратся и сделать по человечески
        const path = '/'
        return path
    }

    return(
        <>
            <Link to={createGoBackPath}>Go back</Link>
            {movieFullInfo
            ? <MovieFullInfo movieFullInfo={movieFullInfo}/>
            : null}
            <hr/ >
            <h3>Additional information</h3>
            <ul>
                <li><NavLink to={`${url}/cast`}>Cast</NavLink></li>         {/* /movies/:movieId/cast */}
                <li><NavLink to={`${url}/reviews`}>Reviews</NavLink></li>   {/* /movies/:movieId/reviews */}
            </ul>
            <div>
                <Route path={`${path}/cast`}>
                    {movieFullInfo
                        ?<Cast id={movieFullInfo.id}/>
                        :null
                    }
                </Route>
                <Route path={`${path}/reviews`}>
                    {movieFullInfo
                        ?<Reviews id={movieFullInfo.id}/>
                        :null
                    }
                </Route>
            </div>
        </>
    )
}