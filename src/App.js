import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ButtonUp from './components/ButtonUp';
import Container from './components/Container';
import Header from './components/Header';

import Loader from 'react-loader-spinner';

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
      <Suspense
        fallback={
          <Loader
            type="RevolvingDot"
            color="#00BFFF"
            height={100}
            width={100}
          />
        }
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
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
