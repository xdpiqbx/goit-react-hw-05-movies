import PropTypes from 'prop-types';

import s from './CastList.module.scss';
import defaultMan from '../../images/defaultMan.jpg';
import defaultWoman from '../../images/defaultWoman.jpg';
import defaultYoda from '../../images/yoda.jpg';
import { useEffect } from 'react';

export default function CastList({ cast }) {
  const imgBase = `https://image.tmdb.org/t/p/w200`;

  const createDefaultImagePath = (path, gender) => {
    // С актёрским составом прилетает gender
    // 1 - девушка, 2 - мужик, или просто 0
    // если нет фотки (path), вставлю дефолтную картинку в зависимости от gender
    let imagePath = '';
    switch (gender) {
      case 1:
        imagePath = defaultWoman;
        break;
      case 2:
        imagePath = defaultMan;
        break;
      default:
        imagePath = defaultYoda;
        break;
    }
    return imagePath;
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <ul className={s.list}>
        {cast.map(({ id, name, character, profile_path, gender }) => {
          return (
            <li className={s.listItem} key={id}>
              <img
                className={s.image}
                height="200"
                src={
                  profile_path
                    ? `${imgBase}${profile_path}`
                    : createDefaultImagePath(profile_path, gender)
                }
                alt={`${name} ${character}`}
              />
              <div className={s.nameCharacterWrapper}>
                <p>
                  <b className={s.name}>{name}</b>
                  <small className={s.character}>{character}</small>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

CastList.propTypes = {
  cast: PropTypes.array,
};
