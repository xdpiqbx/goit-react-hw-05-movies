import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { createFetchForCast } from '../services/fetchAPI';
import CastList from '../components/CastList';

export default function Cast({ id }) {
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    createFetchForCast(id).then(setCastList);
  }, [id]);

  return castList && <CastList cast={castList.cast} />;
}

Cast.propTypes = {
  id: PropTypes.number,
};
