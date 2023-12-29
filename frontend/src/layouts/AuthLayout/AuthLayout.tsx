import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'stretch' }}>
      <div className='basis-full'>
        <Outlet />
      </div>
    </div>
  );
};
