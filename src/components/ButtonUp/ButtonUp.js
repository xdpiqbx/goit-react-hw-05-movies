import { ImArrowUp2 } from 'react-icons/im';
import s from './ButtonUp.module.scss';
export default function ButtonUp() {
  function up() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <button className={s.up} onClick={up} type="button">
      <ImArrowUp2 />
    </button>
  );
}
