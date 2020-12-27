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
  const [createBackPath, setCreateBackPath] = useState(null);

  useEffect(() => {
    createFetchForFullInfo(movieId).then(setMovieFullInfo);
  }, [movieId]);

  useEffect(() => {
    if (history.location.state) {
      const { pathname, search } = history.location.state;
      setCreateBackPath({ ...location, pathname, search });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createGoBack = () => {
    if (!createBackPath) {
      history.push('/');
      return;
    }
    history.push(createBackPath);
  };

  // console.log(createBackPath);

  return (
    <>
      <ButtonGoBack onClick={createGoBack} />
      {movieFullInfo ? <MovieFullInfo movieFullInfo={movieFullInfo} /> : null}
      {movieFullInfo ? <AddInformation movieId={movieFullInfo.id} /> : null}
    </>
  );
}
