import { FC, useState } from "react";
import cls from './Sidebar.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";

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

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;