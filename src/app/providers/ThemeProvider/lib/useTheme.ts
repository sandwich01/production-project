import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

/**
 * Результат, возвращаемый из хука useTheme.
 *
 * @interface
 * @property {Theme} theme - Текущая активная тема
 * @property {() => void} toggleTheme - Функция для переключения между темами
 */
interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

/**
 * Кастомный хук для работы с темой приложения.
 * Позволяет получить текущую тему и переключить её.
 *
 * @returns {UseThemeResult} Объект с текущей темой и функцией переключения
 */
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
            case Theme.LIGHT:
                newTheme = Theme.ORANGE
            case Theme.ORANGE:
                newTheme = Theme.DARK
            default:
                newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}