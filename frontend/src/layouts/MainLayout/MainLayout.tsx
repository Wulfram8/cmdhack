import { Outlet } from 'react-router-dom';
import { FC, Suspense } from 'react';
import { Header } from '../../components/Header/Header.tsx';

const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
