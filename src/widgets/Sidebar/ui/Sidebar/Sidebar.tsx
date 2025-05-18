import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

/**
 * Интерфейс свойств для компонента Sidebar.
 *
 * @interface
 * @property {string} [className] - Дополнительный CSS-класс для кастомизации
 */
interface SidebarProps {
    className?: string;
}

/**
 * Компонент боковой панели (Sidebar).
 * Поддерживает сворачивание и содержит переключатель тем оформления.
 *
 * @component
 * @param {Object} props - Пропсы компонента
 * @param {string} [props.className] - Дополнительный класс для внешнего контейнера
 *
 * @example
 * <Sidebar className="app-sidebar" />
 */
const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>
                {t('toggle')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
