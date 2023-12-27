import {RouteProps} from "react-router-dom";
import MenuPage from "../pages/MenuPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
    MENU = 'menu'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MENU]: '/posts',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.MENU]: {
        path: RoutePath.menu,
        element: <MenuPage />
    },
}