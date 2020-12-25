import s from './RewiewsList.module.scss';
export default function RewiewsList({ rewiewsList }) {
  const createAvatarPath = url => {
    const imgBase = `https://image.tmdb.org/t/p/w200`;
    if (url && url.includes('https://')) {
      url = url.slice(1);
      return url;
    }
    return imgBase + url;
  };

  if (rewiewsList.results.length > 0) {
    return (
      <ul className={s.list}>
        {rewiewsList.results.map(({ id, author, content, author_details }) => {
          return (
            <li className={s.listItem} key={id}>
              <div className={s.listItemHeader}>
                {author_details.avatar_path && (
                  <div className={s.avatarWrapper}>
                    <img
                      src={createAvatarPath(author_details.avatar_path)}
                      alt=""
                    />
                  </div>
                )}
                <div>
                  <b>{author}</b>
                </div>
              </div>
              <div className={s.listItemContent}>{content}</div>
            </li>
          );
        })}
      </ul>
    );
  }
  return <h2>We don't have any reviews for this movie</h2>;
}
