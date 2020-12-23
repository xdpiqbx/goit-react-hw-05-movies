import s from './MovieFullInfo.module.scss'
export default function MovieFullInfo(props) {
 
  const {
    id,
    backdrop_path,
    poster_path,
    title, name, original_title,
    overview,
    genres,
    vote_average } = props.movieFullInfo

  const styleBefore = {
      content: '',
      width:'100%', height:'100%',
      position:'absolute',
      overflow: 'hidden',
      top:0, left:0,
      background: `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`,
      backgroundRepeat:'no-repeat',
      backgroundSize: '100%',
      zIndex:-1,
      transform: `skewY(-2.2deg)`,
      transformOrigin:'0 0',
  }
  return (
    <div className={s.movieCard}>
      <div className={s.container}>
        <img height="300" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="cover" className={s.cover} />
        <div className={s.hero}>
          <div style={styleBefore}></div>
          <div className={s.details}>
            <div className={s.title1}>{title || name}</div>
            <div className={s.title2}>{original_title}</div>
            <span className={s.title3}>{vote_average} vote average</span>
          </div>
        </div>
        <div className={s.description}>
          <ul className={s.column1}>
            {
              genres.map(({name}, index) => (<li key={id+index} className={s.tag}>{name}</li>))
            }
          </ul>
          <div className={s.column2}>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}