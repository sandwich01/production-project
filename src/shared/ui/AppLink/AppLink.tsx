import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

/**
 * Перечисление доступных тем оформления для компонента AppLink.
 * Используется для задания визуального стиля ссылки.
 */
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

/**
 * Тип пропсов для компонента AppLink.
 * Наследуется от стандартных LinkProps из react-router-dom, с добавлением пользовательских полей.
 *
 * @property {string} [className] - Дополнительный CSS-класс для кастомизации
 * @property {AppLinkTheme} [theme] - Тема оформления ссылки (primary / secondary)
 */
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
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

const AppLink: FC<AppLinkProps> = (props) => {
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
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
