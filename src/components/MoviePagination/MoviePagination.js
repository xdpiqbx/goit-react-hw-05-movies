import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import s from './MoviePagination.module.scss';

export default function MoviePagination({ count, statePage, setPage }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Pagination
      ul={s.pagContainer}
      page={Number(statePage)}
      count={count}
      onChange={handleChange}
      renderItem={item => <PaginationItem page={Number(statePage)} {...item} />}
    />
  );
}
