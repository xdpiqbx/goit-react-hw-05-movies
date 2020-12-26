import { useState } from 'react';
import { ImSearch } from 'react-icons/im';

import s from './SearchForm.module.scss';

export default function SearchForm({ onSubmitHandler }) {
  const [searchQuery, setSearchQuery] = useState('');

  const onChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!searchQuery) {
      return;
    }
    onSubmitHandler(searchQuery);
    setSearchQuery('');
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={onSubmit}>
        <label className={s.formLabel}>
          <input
            className={s.input}
            type="text"
            value={searchQuery}
            onChange={onChange}
          />
        </label>
        <button className={s.btn} type="submit">
          {' '}
          <ImSearch />
          Search
        </button>
      </form>
    </div>
  );
}
