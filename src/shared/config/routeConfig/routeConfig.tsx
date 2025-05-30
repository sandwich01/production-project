import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundePage } from 'pages/NotFoundePage';
import { RouteProps } from 'react-router-dom';

/**
 * Маршруты приложения.
 * Используется для унифицированного обращения к маршрутам в коде.
 */
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

/**
 * Сопоставление маршрутов из enum `AppRoutes` к строковым путям URL.
 * Используется для централизованного управления адресами.
 */
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '/*',
};

/**
 * Конфигурация маршрутов приложения.
 * Определяет соответствие между маршрутом, его путём и отображаемым элементом (страницей).
 */
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundePage />,
    },
};
