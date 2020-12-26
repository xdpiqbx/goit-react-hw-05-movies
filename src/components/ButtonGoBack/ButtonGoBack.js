import { ImArrowLeft2 } from 'react-icons/im';
import s from './ButtonGoBack.module.scss';
export default function ButtonGoBack({ onClick }) {
  return (
    <button className={s.back} type="button" onClick={onClick}>
      <ImArrowLeft2 /> Go back
    </button>
  );
}
