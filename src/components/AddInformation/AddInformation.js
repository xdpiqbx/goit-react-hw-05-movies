import PropTypes from 'prop-types';
import LoaderInWrap from '../LoaderInWrap';

import { lazy, Suspense } from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

import s from './AddInformation.module.scss';

const Cast = lazy(() =>
  import('../../views/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../../views/Reviews' /* webpackChunkName: "Reviews" */),
);

export default function AddInformation({ movieId }) {
  const { url, path } = useRouteMatch();

  return (
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
        </li>
        {/* /movies/:movieId/cast */}
        <li className={s.addInfoItemList}>
          <NavLink
            className={s.addInfoItemListLink}
            activeClassName={s.active}
            to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
        </li>
        {/* /movies/:movieId/reviews */}
      </ul>

      <Suspense fallback={<LoaderInWrap />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast id={movieId} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews id={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

AddInformation.propTypes = {
  movieId: PropTypes.number,
};
