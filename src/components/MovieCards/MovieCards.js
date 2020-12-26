import { NavLink, useHistory } from 'react-router-dom';
import s from './MovieCards.module.scss';
import noCoverImage from '../../images/noCoverImage.jpg';

const MovieCards = ({ moviesList }) => {
  const imgBase = `https://image.tmdb.org/t/p/w200`;

  const createDefaultImagePath = path => {
    return path ? imgBase + path : noCoverImage;
  };

  const history = useHistory();

  return (
    <ul className={s.cardsList}>
      {moviesList &&
        moviesList.map(movie => (
          <li key={movie.id} className={s.cardsListItem}>
            <NavLink
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  pathname: history.location.pathname,
                  search: history.location.search,
                  query: new URLSearchParams(history.location.search).get(
                    'page',
                  ),
                },
              }}
            >
              <div className={s.card}>
                <img
                  className={s.image}
                  src={createDefaultImagePath(movie.poster_path)}
                  alt={movie.title || movie.name}
                />
                <div className={s.cardInfo}>
                  <h2 className={s.cardTitle}>{movie.title || movie.name}</h2>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default MovieCards;
