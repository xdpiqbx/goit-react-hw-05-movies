import { Route, Switch } from 'react-router-dom'
import Container from './components/Container'
import Header from './components/Header'
import HomePage from './views/HomePage'
import MovieDetailsPage from './views/MovieDetailsPage'
import MoviesPage from './views/MoviesPage'

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/movies'>
          <MoviesPage />
        </Route>
        <Route path='/movies/:movieId'>
          <MovieDetailsPage />
        </Route>
      </Switch>
      {/*
        '/' - <HomePage>, домашняя страница со списком популярных кинофильмов.
        '/movies' - <MoviesPage>, страница поиска фильмов по ключевому слову.
        '/movies/:movieId' - <MovieDetailsPage>, страница с детальной информацией о кинофильме.
        '/movies/:movieId/cast' - <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
        '/movies/:movieId/reviews' - <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
      */}
    </Container>
  );
}

export default App;
//https://github.com/goitacademy/react-homework/tree/master/homework-04