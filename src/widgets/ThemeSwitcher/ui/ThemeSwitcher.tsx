import { FC } from "react";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import Button, { ThemeButton } from "shared/ui/Button/Button";

/**
 * Интерфейс свойств для компонента ThemeSwitcher.
 *
 */
interface ThemeSwitcherProps {
    className?: string;
}

/**
 * Кнопка-переключатель между светлой и тёмной темами приложения.
 *
 * @component
 * @param {Object} props - Пропсы компонента
 * @param {string} [props.className] - Дополнительный класс для стилизации кнопки
 *
 * @example
 * <ThemeSwitcher className="header-theme-switcher" />
 */
const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

export default ThemeSwitcher;