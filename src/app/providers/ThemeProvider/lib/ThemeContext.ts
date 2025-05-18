import { createContext } from 'react';

/**
 * Перечисление доступных тем приложения.
 *
 * @enum {string}
 */
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

/**
 * Тип пропсов для контекста темы.
 *
 * @interface
 * @property {Theme} [theme] - Текущая активная тема
 * @property {(theme: Theme) => void} [setTheme] - Функция для изменения темы
 */
export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

/**
 * Контекст приложения для управления и передачи текущей темы.
 * Используется провайдером `ThemeProvider` для обеспечения темы во всем дереве компонентов.
 *
 * @type {React.Context<ThemeContextProps>}
 */
export const ThemeContext = createContext<ThemeContextProps>({});

/**
 * Ключ, используемый для сохранения выбранной темы в localStorage.
 *
 * @constant {string}
 */
export const LOCAL_STORAGE_THEME_KEY = 'theme';
