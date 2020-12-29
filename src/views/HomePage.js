import React, { useEffect, useState } from 'react';
import MoviePagination from '../components/MoviePagination';

import MovieCards from '../components/MovieCards';
import { createFetchForTrending } from '../services/fetchAPI';
import { useHistory, useLocation } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();
  const history = useHistory();

  const [moviesList, setMoviesList] = useState(null);
  const [statePage, setPage] = useState(
    new URLSearchParams(history.location.search).get('page') || 1,
  );

  useEffect(() => {
    createFetchForTrending(statePage).then(setMoviesList);
    location.search = `page=${statePage}`;
    history.push({
      ...location,
    });
    // Просит history и location
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statePage, history]);

  console.log('history', history);
  console.log('location', location);

  return (
    moviesList && (
      <>
        <MovieCards moviesList={moviesList.results} page={statePage} />
        <MoviePagination
          count={moviesList.total_pages}
          statePage={statePage}
          setPage={setPage}
        />
      </>
    )
  );
}
