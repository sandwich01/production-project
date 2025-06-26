import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

/**
 * Перечисление доступных тем оформления для компонента AppLink.
 * Используется для задания визуального стиля ссылки.
 */
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

/**
 * Переопределённый компонент ссылки (`<Link>`) из react-router-dom.
 * Поддерживает разные темы оформления и интегрирован с утилитой classNames.
 *
 * @component
 * @param {string} to - URL или объект для перехода по маршруту
 * @param {React.ReactNode} children - Содержимое ссылки
 * @param {string} [className] - Дополнительный класс для стилизации
 * @param {AppLinkTheme} [theme] - Тема оформления (по умолчанию: primary)
 * @param {object} [otherProps] - Любые другие свойства, поддерживаемые `<Link>`
 *
 * @example
 * <AppLink to="/about" theme={AppLinkTheme.secondary}>О сайте</AppLink>
 */
export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
