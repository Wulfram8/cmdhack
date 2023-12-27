import {RouteProps} from "react-router-dom";
import {HomePageAsync} from "../pages/HomePage/HomePage.async.tsx";
import {MenuPageAsync} from "../pages/MenuPage/MenuPage.async.tsx";
import {OrderPageAsync} from "../pages/OrderPage/OrderPage.async.tsx";

export enum AppRoutes {
    HOME = 'home',
    MENU = 'menu',
    ORDER = 'order'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.MENU]: '/menu',
    [AppRoutes.ORDER]: '/orders'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePageAsync />
    },
    [AppRoutes.MENU]: {
        path: RoutePath.menu,
        element: <MenuPageAsync/>
    },
    [AppRoutes.ORDER]: {
        path: RoutePath.order,
        element: <OrderPageAsync/>
    },
}