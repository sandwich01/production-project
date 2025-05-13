import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

/**
 * Интерфейс свойств для компонента Navbar.
 *
 * @interface
 * @property {string} [className] - Дополнительный CSS-класс для стилизации контейнера.
 */
interface NavbarProps {
    className?: string;
}

/**
 * Компонент навигационной панели.
 * Отображает горизонтальное меню с ссылками на страницы приложения.
 *
 * @component
 * @param {NavbarProps} props - Пропсы компонента
 *
 * @example
 * <Navbar className="Navbar" />
 */
const Navbar: FC<NavbarProps> = (props) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher className="" />
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    Главная
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
}

export default Navbar;