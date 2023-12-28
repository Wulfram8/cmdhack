import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../routerConfig.tsx';
import MainLayout from '../../layouts/MainLayout/MainLayout.tsx';
import { Suspense } from 'react';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
