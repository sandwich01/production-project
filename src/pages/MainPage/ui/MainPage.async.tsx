import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Задержка для того чтобы видеть загрузку
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));
