import { makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
// import s from './MoviePagination.module.scss';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 25,
  },
});

export default function MoviePagination({ count, statePage, setPage }) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Pagination
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
      }}
      page={Number(statePage)}
      count={count}
      onChange={handleChange}
      renderItem={item => <PaginationItem page={Number(statePage)} {...item} />}
    />
  );
}
