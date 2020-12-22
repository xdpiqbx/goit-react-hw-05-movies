import { useState } from 'react';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const onChange = event => {
    console.log(event.currentTarget.value);
    setSearchQuery(event.currentTarget.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    //Some handler(searchQuery)
    setSearchQuery('')
  }

  return (
    <form onSubmit={onSubmit}>
        <label>
          <input type="text" value={searchQuery} onChange={onChange} />
        </label>
        <button type="submit">Search</button>
    </form>
  )
}