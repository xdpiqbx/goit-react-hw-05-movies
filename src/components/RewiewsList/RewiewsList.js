import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import s from './RewiewsList.module.scss';

const TEXT_LENGTH = 150;

export default function RewiewsList({ rewiewsList }) {
  const [arrShowMore, setArrShowMore] = useState(
    rewiewsList.results.map(({ id }) => {
      return { id, isShow: false };
    }),
  );

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  const createAvatarPath = url => {
    const imgBase = `https://image.tmdb.org/t/p/w200`;
    if (url && url.includes('https://')) {
      url = url.slice(1);
      return url;
    }
    return imgBase + url;
  };

  function normalizeContent(text, isShow) {
    if (isShow) {
      return text + ` `;
    } else {
      return text.slice(0, TEXT_LENGTH) + ` `;
    }
  }

  const showHideHandler = id => {
    setArrShowMore(
      arrShowMore.map(post => {
        if (post.id === id) {
          post.isShow = !post.isShow;
        }
        return post;
      }),
    );
  };

  if (rewiewsList.results.length > 0 && arrShowMore) {
    return (
      <ul className={s.list}>
        {rewiewsList.results.map(
          ({ id, author, content, author_details }, index) => {
            return (
              <li className={s.listItem} key={id}>
                <div className={s.listItemHeader}>
                  {author_details.avatar_path && (
                    <div className={s.avatarWrapper}>
                      <img
                        src={createAvatarPath(author_details.avatar_path)}
                        alt={author}
                      />
                    </div>
                  )}
                  <div>
                    <b>{author}</b>
                  </div>
                </div>
                <div className={s.listItemContent}>
                  {normalizeContent(content, arrShowMore[index].isShow)}
                  {content.length > TEXT_LENGTH ? (
                    <span
                      className={s.showMore}
                      onClick={() => {
                        showHideHandler(id);
                      }}
                    >
                      {arrShowMore[index].isShow
                        ? `...Show less`
                        : `Show more...`}
                    </span>
                  ) : null}
                </div>
              </li>
            );
          },
        )}
      </ul>
    );
  }
  return <h2>We don't have any reviews for this movie</h2>;
}

RewiewsList.propTypes = {
  rewiewsList: PropTypes.object,
};
