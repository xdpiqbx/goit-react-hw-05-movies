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