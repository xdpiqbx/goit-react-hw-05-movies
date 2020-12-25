import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MovieCards from '../components/MovieCards';
import { createFetchSearchByKeyword } from '../services/fetchAPI';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchedMovies, setFetchedMovies] = useState('');

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (history.location.state) {
      MoviesHandler(history.location.state.query);
    }
  }, [history.location.state]);

  const onChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const MoviesHandler = query => {
    createFetchSearchByKeyword(query).then(setFetchedMovies);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!searchQuery) {
      return;
    }
    setSearchQuery(searchQuery);
    MoviesHandler(searchQuery);
    history.push({
      ...location,
      search: `query=${searchQuery}`,
    });
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <input type="text" value={searchQuery} onChange={onChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      <MovieCards moviesList={fetchedMovies} />
    </>
  );
}
