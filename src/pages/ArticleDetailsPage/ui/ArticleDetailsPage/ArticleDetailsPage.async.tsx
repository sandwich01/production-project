import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Задержка для того чтобы видеть загрузку
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));