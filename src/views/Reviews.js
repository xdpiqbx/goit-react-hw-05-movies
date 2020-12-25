import { useEffect, useState } from 'react';
import { createFetchForReviews } from '../services/fetchAPI';
import RewiewsList from '../components/RewiewsList';

export default function Rewiews({ id }) {
  const [rewiewsList, setRewiewsList] = useState(null);

  useEffect(() => {
    createFetchForReviews(id).then(setRewiewsList);
  }, [id]);

  return rewiewsList && <RewiewsList rewiewsList={rewiewsList} />;
}
