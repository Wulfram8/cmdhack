import styles from './Header.module.scss';
import { FC } from 'react';
import Input from '../UI/input/Input.tsx';
import CallingIcon from '../../assets/icons/calling-icon.svg';
import customClasses from '../../lib/customClasses/customClasses.ts';
import { Link } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '@/store/index.ts';
import { logout, selectIsAuthenticated } from '@/store/auth/authSlice.ts';
import { Button } from '../UI/TabMenu/button/Button.tsx';

interface iHeaderProps {
  className?: string;
}

export const Header: FC<iHeaderProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const isAuthenticated = useTypedSelector(selectIsAuthenticated);

  return (
    <header className={customClasses(styles.Header, {}, [className!])}>
      <Link to='' className={styles.headerLogo}>
        Logos
      </Link>
      <Input className={'input'} placeholder={'Введите адрес доставки'} />
      <div className={styles.contacts}>
        <img className={styles.contactsIcon} src={CallingIcon} alt='' />
        <div className={styles.contactsInfo}>
          <h4 className={styles.title}>Контакты</h4>
          <span id={styles.phoneNumber}>+7 (917) 510-57-79</span>
        </div>
      </div>
      <div className={styles.headerBtnCont}>
        <Link to='/cart'>
          Корзина | <span>4</span>
        </Link>
        {!isAuthenticated ? (
          <Link to='/auth/login'>Войти</Link>
        ) : (
          <Button onClick={() => dispatch(logout())}>Выйти</Button>
        )}
      </div>
    </header>
  );
};
