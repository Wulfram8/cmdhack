import { RouteProps } from 'react-router-dom';
import { HomePageAsync } from '../pages/HomePage/HomePage.async.tsx';
import { MenuPageAsync } from '../pages/MenuPage/MenuPage.async.tsx';
import { OrderPageAsync } from '../pages/OrderPage/OrderPage.async.tsx';
import { CartPageAsync } from '../pages/CartPage/CartPage.async.tsx';
import { MakeOrderPage } from '@/pages/MakeOrderPage/MakeOrderPage.tsx';

export enum AppRoutes {
  HOME = 'home',
  MENU = 'menu',
  ORDER = 'order',
  CART = 'cart',
  MAKE_ORDER = 'makeOrder',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.MENU]: '/menu',
  [AppRoutes.ORDER]: '/orders',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.MAKE_ORDER]: 'make-order',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePageAsync />,
  },
  [AppRoutes.MENU]: {
    path: RoutePath.menu,
    element: <MenuPageAsync />,
  },
  [AppRoutes.ORDER]: {
    path: RoutePath.order,
    element: <OrderPageAsync />,
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <CartPageAsync />,
  },
  [AppRoutes.MAKE_ORDER]: {
    path: RoutePath.makeOrder,
    element: <MakeOrderPage />,
  },
};
