import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

/**
 * Тема текстового компонента. Определяет стили отображения.
 *
 * @enum {string}
 * @property {string} PRIMARY - Основной стиль текста (`primary`)
 * @property {string} ERROR - Стиль для ошибок (`error`)
 */
export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

/**
 * Пропсы для компонента Text
 *
 * @property {string} [className] - Дополнительный CSS-класс для стилизации (`string`)
 * @property {string} [title] - Заголовок текстового блока (`string`)
 * @property {string} [text] - Основной текст (`string`)
 * @property {TextTheme} [theme] - Тема оформления текста (`TextTheme`)
 */
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

/**
 * Компонент отображения текста с поддержкой заголовка и темы
 * Отображает title и/или text в зависимости от переданных пропсов
 */
export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});