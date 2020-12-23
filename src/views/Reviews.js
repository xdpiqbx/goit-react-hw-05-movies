import { useEffect, useState } from 'react';
import {createFetchForReviews} from '../services/fetchAPI'
import RewiewsList from '../components/RewiewsList'

export default function Rewiews({id}){
    const [rewiewsList, setRewiewsList] = useState(null);

    useEffect(() => {
        createFetchForReviews(id).then(setRewiewsList);
    }, [id]);

    return(
        rewiewsList &&
        <RewiewsList rewiewsList={rewiewsList}/>
    )
}
/*
import { useEffect, useState } from 'react';
import {createFetchForCast} from '../services/fetchAPI'
import CastList from "../components/CastList";

export default function Cast(props){
    const [castList, setCastList] = useState(null);
 
    useEffect(() => {
        createFetchForCast(props.id).then(setCastList);
    }, [props.id]);

    return(
        castList &&
        <CastList cast={castList.cast}/>
    )
}
*/