import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ButtonUp from './components/ButtonUp';
import Container from './components/Container';
import Header from './components/Header';

import LoaderInWrap from './components/LoaderInWrap';

import { throttle } from 'lodash';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

function App() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (!isScroll) {
      window.addEventListener(
        'scroll',
        throttle(() => scr(), 500),
      );
    } else {
      window.removeEventListener('scroll', scr);
    }
  }, [isScroll]);

  const scr = () => {
    if (window.pageYOffset < 400) {
      setIsScroll(false);
      return;
    }
    setIsScroll(true);
  };

  return (
    <Container>
      <Header />
      <Suspense fallback={<LoaderInWrap />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
      {isScroll && <ButtonUp />}
    </Container>
  );
}

export default App;
