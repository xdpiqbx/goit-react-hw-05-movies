import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { createFetchSearchByKeyword } from '../services/fetchAPI';
import MoviePagination from '../components/MoviePagination';
import MovieCards from '../components/MovieCards';
import SearchForm from '../components/SearchForm';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  const [fetchedMovies, setFetchedMovies] = useState(null);

  const [startQuery, setStartQuery] = useState(
    new URLSearchParams(history.location.search).get('query'),
  );

  const [page, setPage] = useState(
    new URLSearchParams(history.location.search).get('page'),
  );

  useEffect(() => {
    if (startQuery) {
      createFetchSearchByKeyword(startQuery, page).then(setFetchedMovies);
    }
    location.search = startQuery ? `page=${page ?? 1}&query=${startQuery}` : '';
    history.push({
      ...location,
    });
    // Просит location
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startQuery, page, history]);

  const onSubmitHandler = query => {
    setStartQuery(query);
    history.push({
      ...location,
      search: `page=${page ?? 1}&query=${query}`,
    });
  };

  return (
    <>
      <SearchForm onSubmitHandler={onSubmitHandler} />

      {fetchedMovies && fetchedMovies.total_results > 0 && (
        <>
          <MovieCards moviesList={fetchedMovies.results} />
          <MoviePagination
            count={fetchedMovies.total_pages}
            statePage={page}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
}
