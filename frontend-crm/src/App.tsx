import { useRoutes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import OrdersPage from './pages/Orders';

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
          element: <OrdersPage />,
        },
      ],
    },
  ]);

  return <>{routes}</>;
}

export default App;
