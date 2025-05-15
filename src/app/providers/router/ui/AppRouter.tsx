import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

/**
 * Компонент маршрутизации приложения.
 * Обеспечивает отрисовку страниц на основе конфигурации `routeConfig`.
 * Использует React Router v6 для определения маршрутов.
 * 
 * @component
 * @returns {JSX.Element} Отрисовывает <Routes> с динамически подключенными маршрутами.
 */
const AppRouter: FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;