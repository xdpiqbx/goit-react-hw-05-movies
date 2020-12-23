import { NavLink } from "react-router-dom";
import s from './MovieCards.module.scss'

export default function MovieCards (props) {
  const setBackgroundImg = (imgUrl) => {
    return {
      backgroundImage: `var(--card-img-hovered-overlay), url(${imgUrl})`,
      // backgroundSize: `250px`
    }
  }
  return (
    <ul className={s.cardContainer}>
      {props.moviesList &&
        props.moviesList.results.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
                <div className={s.card}>
                  <div className={s.cardImg}></div>
                  <div className={s.cardImgHovered} style={setBackgroundImg(`https://image.tmdb.org/t/p/w780/${movie.poster_path}`)}></div>
                  <div className={s.cardInfo}>
                    <h1 className={s.cardTitle}>{movie.title || movie.name}</h1>
                  </div>
                </div>
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}