import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

/**
 * Перечисление доступных тем для кнопки.
 * Позволяет задать стиль внешнего вида через CSS-классы.
 */
export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    CLEAR_INVERTED = 'clearInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

/**
 * Кастомная кнопка с поддержкой тем оформления.
 * Обертка над нативным <button>, расширенная возможностью применения стилей через темы.
 *
 * @component
 * @param {React.ReactNode} children - Содержимое кнопки
 * @param {string} [className] - Дополнительный класс для стилизации
 * @param {ButtonTheme} [theme] - Тема кнопки (по умолчанию: clear)
 * @param {object} [otherProps] - Любые другие props, поддерживаемые тегом <button>
 *
 * @example
 * <Button theme={ThemeButton.CLEAR}>Нажми меня</Button>
 */
export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});