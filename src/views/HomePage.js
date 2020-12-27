import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useHistory, useLocation } from 'react-router-dom';

import MovieCards from '../components/MovieCards';
import { createFetchForTrending } from '../services/fetchAPI';

export default function HomePage() {
  const history = useHistory();
  const location = useLocation();

  const [moviesList, setMoviesList] = useState(null);
  const [page, setPage] = useState(
    new URLSearchParams(history.location.search).get('page') || 1,
  );

  useEffect(() => {
    createFetchForTrending(page).then(setMoviesList);
    if (page === 1) {
      history.push('/');
      return;
    }
    history.push({
      ...location,
      search: `page=${page}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, history]);

  function onPageChange(data) {
    setPage(Number(data.selected) + 1);
  }

  return (
    <>
      {moviesList && <MovieCards moviesList={moviesList.results} />}
      {moviesList && (
        <ReactPaginate
          pageCount={moviesList.total_pages}
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
