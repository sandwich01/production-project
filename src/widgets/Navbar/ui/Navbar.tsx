import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

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
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to={t('/about')}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
