import PropTypes from 'prop-types';

import s from './MovieFullInfo.module.scss';

import noCoverImage from '../../images/noCoverImage.jpg';
import noBG from '../../images/noBG.jpg';

export default function MovieFullInfo(props) {
  const createDefaultImagePath = (path, defImg, size) => {
    const imgBase = `https://image.tmdb.org/t/p/w${size}`;
    return path ? imgBase + path : defImg;
  };

  const {
    id,
    backdrop_path,
    poster_path,
    title,
    name,
    original_title,
    overview,
    genres,
    vote_average,
  } = props.movieFullInfo;

  const bgImg = {
    backgroundImage: `url(${createDefaultImagePath(backdrop_path, noBG, 500)})`,
  };
  return (
    <div className={s.movieCard}>
      <div className={s.container}>
        <img
          height="300"
          src={createDefaultImagePath(poster_path, noCoverImage, 200)}
          alt="cover"
          className={s.cover}
        />
        <div className={s.hero}>
          <div style={bgImg} className={s.bgImg}></div>
          <div className={s.details}>
            <div className={s.title1}>{title || name}</div>
            <div className={s.title2}>{original_title}</div>
            <span className={s.title3}>{vote_average} vote average</span>
            <span className={s.title3}>{vote_average * 10}% User score</span>
          </div>
        </div>
        <div className={s.description}>
          <ul className={s.genres}>
            {genres &&
              genres.map(({ name }, index) => (
                <li key={id + index} className={s.tag}>
                  {name}
                </li>
              ))}
          </ul>
          <div className={s.overview}>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieFullInfo.propTypes = {
  movieFullInfo: PropTypes.object,
};
