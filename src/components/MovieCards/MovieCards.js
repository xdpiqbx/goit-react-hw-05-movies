import { NavLink, useHistory } from 'react-router-dom';
import s from './MovieCards.module.scss';

const MovieCards = ({ moviesList }) => {
  const setBackgroundImg = imgUrl => {
    return {
      backgroundImage: `var(--card-img-hovered-overlay), url(${imgUrl})`,
    };
  };
  const history = useHistory();

  return (
    <ul className={s.cardContainer}>
      {moviesList &&
        moviesList.results.map(movie => (
          <li key={movie.id}>
            <NavLink
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  pathname: history.location.pathname,
                  search: history.location.search,
                  query: new URLSearchParams(history.location.search).get(
                    'query',
                  ),
                },
              }}
            >
              <div className={s.card}>
                <div className={s.cardImg}></div>
                <div
                  className={s.cardImgHovered}
                  style={setBackgroundImg(
                    `https://image.tmdb.org/t/p/w780/${movie.poster_path}`,
                  )}
                ></div>
                <div className={s.cardInfo}>
                  <h1 className={s.cardTitle}>{movie.title || movie.name}</h1>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default MovieCards;
