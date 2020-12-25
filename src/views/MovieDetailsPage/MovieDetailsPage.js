import { useEffect, useState } from 'react';
import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { createFetchForFullInfo } from '../../services/fetchAPI';
import Cast from '../Cast';
import Reviews from '../Reviews';
import MovieFullInfo from '../../components/MovieFullInfo';

import s from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movieFullInfo, setMovieFullInfo] = useState(null);
  const [createBackPath, setCreateBackPath] = useState(null);

  useEffect(() => {
    createFetchForFullInfo(movieId).then(setMovieFullInfo);
  }, [movieId]);

  useEffect(() => {
    const { pathname, search } = history.location.state;
    setCreateBackPath({ ...location, pathname, search });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createGoBack = () => {
    history.push(createBackPath);
  };

  return (
    <>
      <button type="button" onClick={createGoBack}>{`<- Go back`}</button>
      {movieFullInfo ? <MovieFullInfo movieFullInfo={movieFullInfo} /> : null}
      <div className={s.container}>
        <h3 className={s.addInfo}>Additional information</h3>
        <ul className={s.addInfoList}>
          <li className={s.addInfoItemList}>
            <NavLink
              className={s.addInfoItemListLink}
              activeClassName={s.active}
              to={`${url}/cast`}
            >
              Cast
            </NavLink>
          </li>{' '}
          {/* /movies/:movieId/cast */}
          <li className={s.addInfoItemList}>
            <NavLink
              className={s.addInfoItemListLink}
              activeClassName={s.active}
              to={`${url}/reviews`}
            >
              Reviews
            </NavLink>
          </li>{' '}
          {/* /movies/:movieId/reviews */}
        </ul>
        <Route path={`${path}/cast`}>
          {movieFullInfo ? <Cast id={movieFullInfo.id} /> : null}
        </Route>
        <Route path={`${path}/reviews`}>
          {movieFullInfo ? <Reviews id={movieFullInfo.id} /> : null}
        </Route>
      </div>
    </>
  );
}
