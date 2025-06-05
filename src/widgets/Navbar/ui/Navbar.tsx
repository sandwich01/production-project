import { classNames } from 'shared/lib/classNames/classNames';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

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
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line */}
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.')}
            </Modal>
        </div>
    );
};
