import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Задержка для того чтобы видеть загрузку
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));
