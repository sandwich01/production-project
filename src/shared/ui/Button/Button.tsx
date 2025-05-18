import { ButtonHTMLAttributes, Children, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

/**
 * Перечисление доступных тем для кнопки.
 * Позволяет задать стиль внешнего вида через CSS-классы.
 */
export enum ThemeButton {
    CLEAR = 'clear',
}

/**
 * Интерфейс свойств для компонента Button.
 *
 * @interface
 * @extends ButtonHTMLAttributes<HTMLButtonElement> - Все стандартные атрибуты HTML кнопки
 * @property {string} [className] - Дополнительный CSS-класс для кастомизации
 * @property {ThemeButton} [theme] - Тема оформления кнопки (например: clear)
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

/**
 * Кастомная кнопка с поддержкой тем оформления.
 * Обертка над нативным <button>, расширенная возможностью применения стилей через темы.
 *
 * @component
 * @param {React.ReactNode} children - Содержимое кнопки
 * @param {string} [className] - Дополнительный класс для стилизации
 * @param {ThemeButton} [theme] - Тема кнопки (по умолчанию: clear)
 * @param {object} [otherProps] - Любые другие props, поддерживаемые тегом <button>
 *
 * @example
 * <Button theme={ThemeButton.CLEAR}>Нажми меня</Button>
 */
const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
