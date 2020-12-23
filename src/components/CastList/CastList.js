import s from './CastList.module.scss'
export default function CastList({cast}){
   console.log(cast);
   const imgBase = `https://image.tmdb.org/t/p/w200` 
    return (
        <ul className={s.list}>{
            cast.map(({name, character, profile_path, id}) => {
                return(
                    <li className={s.listItem} key={id}>
                        <img
                            className={s.image}
                            height='200'
                            src={`${imgBase}${profile_path}`}
                            alt={`${name} ${character}`}
                        />
                        <p className={s.nameCharacterWrapper}>
                            <b className={s.name}>{name}</b>
                            <small className={s.character}>{character}</small>
                        </p>
                    </li>
                    )
                })
        }</ul>
    )
}