import { Navigate, Route, Routes } from 'react-router-dom';
import { routeConfig } from '../routerConfig.tsx';
import MainLayout from '../../layouts/MainLayout/MainLayout.tsx';
import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout.tsx';
import { LoginPage } from '@/pages/LoginPage/LoginPage.tsx';
import { useTypedSelector } from '@/store/index.ts';
import { selectIsAuthenticated } from '@/store/auth/authSlice.ts';
import { RegisterPage } from '@/pages/RegisterPage/RegisterPage.tsx';

const AppRouter = () => {
  const isAuthenticated = useTypedSelector(selectIsAuthenticated);

  return (
    <Routes>
      {!isAuthenticated && (
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='/auth/login' element={<LoginPage />} />
          <Route path='/auth/register' element={<RegisterPage />} />
        </Route>
      )}
      <Route path='/' element={<MainLayout />}>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>} />
        ))}
        <Route path={'*'} element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
