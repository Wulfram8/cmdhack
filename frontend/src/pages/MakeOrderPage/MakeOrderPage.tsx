import { Paper } from '@/components/UI/Paper/Paper';
import s from './MakeOrderPage.module.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/router/routerConfig';

export const MakeOrderPage = () => {
  const navigate = useNavigate();

  return (
    <div className={s.root}>
      <button className={s.backButton} onClick={() => navigate(RoutePath.cart)}>
        <IoIosArrowBack />в корзину
      </button>
      <div className={s.titleWrapper}>
        <div className={s.verticalLine} />
        <h1 className={s.title}>Оформление заказа</h1>
      </div>
      <div className={s.formWrapper}>
        <Paper className='bg-slate-950'>
          <h2 className={s.formSectionTitle}>1. Контактная информация</h2>
          <div className='flex'>123</div>
        </Paper>
      </div>
    </div>
  );
};
