import { useState } from 'react';
import MovieCards from '../components/MovieCards'
import {createFetchSearchByKeyword} from '../services/fetchAPI'

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [fetchedMovies, setFetchedMovies] = useState('')
  
  const onChange = event => {
    setSearchQuery(event.currentTarget.value)
  }

  const MoviesHandler = (query) => {
    createFetchSearchByKeyword(query).then(setFetchedMovies);
  }

  const onSubmit = event => {
    event.preventDefault()
    setSearchQuery(searchQuery)
    MoviesHandler(searchQuery)
    // и тут создаётся ?query=batman
    setSearchQuery('')
  }

  return (
    <>
      <form onSubmit={onSubmit}>
          <label>
            <input type="text" value={searchQuery} onChange={onChange} />
          </label>
          <button type="submit">Search</button>
      </form>
      <MovieCards moviesList={fetchedMovies}/>
    </>
  )
}