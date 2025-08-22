import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

/**
 * Компонент маршрутизации приложения.
 * Обеспечивает отрисовку страниц на основе конфигурации `routeConfig`.
 * Использует React Router v6 для определения маршрутов.
 *
 * @component
 * @returns {JSX.Element} Отрисовывает <Routes> с динамически подключенными маршрутами.
 */
const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly
                        ? (
                            <RequireAuth>
                                {element}
                            </RequireAuth>
                        )
                        : element
                }
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);