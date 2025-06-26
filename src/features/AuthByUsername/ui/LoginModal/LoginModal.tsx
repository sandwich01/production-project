import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { Loader } from 'shared/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Компонент модального окна для авторизации (LoginModal).
 *
 * @param {LoginModalProps} props - Свойства компонента.
 * @param {string} [props.className] - Дополнительный CSS-класс для стилизации.
 * @param {boolean} props.isOpen - Флаг, открыто ли модальное окно.
 * @param {() => void} props.onClose - Функция закрытия модального окна.
 *
 * Внутри:
 * - Использует компонент `Modal` для отображения диалогового окна.
 * - Внутри модалки рендерится форма входа (`LoginForm`).
 * - Параметр `lazy={true}` откладывает загрузку содержимого до открытия модалки.
 */
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync
                onSuccess={onClose}
            />
        </Suspense>
    </Modal>
);
