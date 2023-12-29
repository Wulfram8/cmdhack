import { Outlet } from 'react-router-dom';
import { FC, Suspense } from 'react';
import { Header } from '../../components/Header/Header.tsx';
import s from './MainLayout.module.scss';

const MainLayout: FC = () => {
  return (
    <div className={s.root}>
      <Header />
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
