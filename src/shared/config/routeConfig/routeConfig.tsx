import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundePage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

/**
 * Маршруты приложения.
 * Используется для унифицированного обращения к маршрутам в коде.
 */
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    // last
    NOT_FOUND = 'not_found',
}

/**
 * Сопоставление маршрутов из enum `AppRoutes` к строковым путям URL.
 * Используется для централизованного управления адресами.
 */
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

/**
 * Конфигурация маршрутов приложения.
 * Определяет соответствие между маршрутом, его путём и отображаемым элементом (страницей).
 */
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};