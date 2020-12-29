import { useEffect, useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { createFetchForFullInfo } from '../services/fetchAPI';
import MovieFullInfo from '../components/MovieFullInfo';
import ButtonGoBack from '../components/ButtonGoBack';
import AddInformation from '../components/AddInformation';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();

  const { movieId } = useParams();

  const [movieFullInfo, setMovieFullInfo] = useState(null);
  const [locationFrom] = useState(location?.state?.from?.location);

  useEffect(() => {
    createFetchForFullInfo(movieId).then(setMovieFullInfo);
  }, [movieId]);

  const buttonGoBackHandler = () => {
    history.push(locationFrom ?? '/');
  };

  return (
    <>
      <ButtonGoBack onClick={buttonGoBackHandler} />
      {movieFullInfo ? <MovieFullInfo movieFullInfo={movieFullInfo} /> : null}
      {movieFullInfo ? <AddInformation movieId={movieFullInfo.id} /> : null}
    </>
  );
}
