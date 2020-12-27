import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MovieCards from '../components/MovieCards';
import { createFetchSearchByKeyword } from '../services/fetchAPI';
import SearchForm from '../components/SearchForm';

import ReactPaginate from 'react-paginate';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  const [fetchedMovies, setFetchedMovies] = useState('');

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
    if (page) {
      history.push({
        ...location,
        search: `query=${startQuery}&page=${page}`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startQuery, page, history]);

  const onSubmitHandler = query => {
    setStartQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  function onPageChange(data) {
    setPage(Number(data.selected) + 1);
  }

  return (
    <>
      <SearchForm onSubmitHandler={onSubmitHandler} />
      {fetchedMovies && <MovieCards moviesList={fetchedMovies.results} />}
      {fetchedMovies && (
        <ReactPaginate
          pageCount={fetchedMovies.total_pages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={onPageChange}
          containerClassName="pagContainer"
          pageClassName="pagItem"
          activeClassName="activePagItem"
          previousClassName="pagPrev"
          nextClassName="pagNext"
          disabledClassName="gagDisabledPrevNext"
        />
      )}
    </>
  );
}
