import { useRoutes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/dashboard',
          element: <div>dashboard</div>,
        },
        {
          path: '/orders',
          element: <div>orders</div>,
        },
      ],
    },
  ]);

  return <>{routes}</>;
}

export default App;
