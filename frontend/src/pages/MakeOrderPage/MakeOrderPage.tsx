import s from './MakeOrderPage.module.scss';
import arrowLeft from '@/assets/icons/arrow-left.svg';

export const MakeOrderPage = () => {
  return (
    <div className={s.root}>
      <button className={s.backButton}>
        <img src={arrowLeft} />в корзину
      </button>
      <div className={s.titleWrapper}>
        <div className={s.verticalLine} />
        <h1 className={s.title}>Оформление заказа</h1>
      </div>
    </div>
  );
};
