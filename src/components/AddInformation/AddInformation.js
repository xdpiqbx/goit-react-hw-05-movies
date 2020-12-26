import { NavLink, Route, useRouteMatch } from 'react-router-dom';

import Cast from '../../views/Cast';
import Reviews from '../../views/Reviews';

import s from './AddInformation.module.scss';

export default function AddInformation({ movieFullInfo }) {
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
      <Route path={`${path}/cast`}>
        <Cast id={movieFullInfo.id} />
      </Route>
      <Route path={`${path}/reviews`}>
        <Reviews id={movieFullInfo.id} />
      </Route>
    </div>
  );
}
