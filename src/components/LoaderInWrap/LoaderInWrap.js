import Loader from 'react-loader-spinner';
import s from './LoaderInWrap.module.scss';

export default function LoaderInWrap() {
  return (
    <div className={s.wrapperForLoaer}>
      <Loader type="RevolvingDot" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
