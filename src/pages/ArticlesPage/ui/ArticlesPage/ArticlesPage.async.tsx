import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Задержка для того чтобы видеть загрузку
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));