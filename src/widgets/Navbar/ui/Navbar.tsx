import { classNames } from 'shared/lib/classNames/classNames';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';
import { LoginModal } from 'features/AuthByUsername';

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

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};
