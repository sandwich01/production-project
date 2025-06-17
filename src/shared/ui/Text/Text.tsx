import { classNames } from 'shared/lib/classNames/classNames';
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
}

/**
 * Компонент отображения текста с поддержкой заголовка и темы
 * Отображает title и/или text в зависимости от переданных пропсов
 */
export const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
