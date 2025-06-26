import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Задержка для того чтобы видеть загрузку
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
