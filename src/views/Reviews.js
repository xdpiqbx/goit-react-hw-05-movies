import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { createFetchForReviews } from '../services/fetchAPI';
import RewiewsList from '../components/RewiewsList';

export default function Rewiews({ id }) {
  const [rewiewsList, setRewiewsList] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });

  useEffect(() => {
    createFetchForReviews(id).then(setRewiewsList);
  }, [id]);

  return rewiewsList && <RewiewsList rewiewsList={rewiewsList} />;
}

Rewiews.propTypes = {
  id: PropTypes.number,
};
