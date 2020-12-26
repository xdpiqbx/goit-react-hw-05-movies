import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MovieCards from '../components/MovieCards';
import { createFetchSearchByKeyword } from '../services/fetchAPI';
import SearchForm from '../components/SearchForm';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  const [fetchedMovies, setFetchedMovies] = useState('');
  const [startQuery, setStartQuery] = useState(
    new URLSearchParams(history.location.search).get('query'),
  );

  useEffect(() => {
    if (startQuery) {
      MoviesHandler(startQuery);
    }
  }, [startQuery]);

  const MoviesHandler = query => {
    createFetchSearchByKeyword(query).then(setFetchedMovies);
  };

  const onSubmitHandler = query => {
    setStartQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <SearchForm onSubmitHandler={onSubmitHandler} />
      {fetchedMovies && <MovieCards moviesList={fetchedMovies.results} />}
    </>
  );
}
