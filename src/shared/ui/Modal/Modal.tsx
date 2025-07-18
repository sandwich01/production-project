import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    MutableRefObject,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

/**
 * Компонент модального окна (Modal).
 *
 * @param {ModalProps} props - Свойства компонента.
 * @param {string} [props.className] - Дополнительный CSS-класс для стилизации.
 * @param {ReactNode} [props.children] - Содержимое модального окна.
 * @param {boolean} [props.isOpen] - Флаг, определяющий, открыто ли окно.
 * @param {() => void} [props.onClose] - Колбэк, вызываемый при закрытии модального окна.
 * @param {boolean} [props.lazy] - Если true — модалка не монтируется в DOM, пока не откроется (ленивая загрузка).
 *
 * Поведение:
 * - При `isOpen = true` модалка появляется с анимацией.
 * - При нажатии Escape или клике вне окна вызывается `onClose` с задержкой (анимация закрытия).
 * - Компонент использует `Portal` для рендера в отдельный DOM-узел (вне основного потока).
 * - Закрытие сопровождается плавной анимацией (`ANIMATION_DELAY = 300` мс).
 * - `classNames` и тема из `useTheme` добавляют стили и модификаторы.
 * - Обработчик клика внутри модального контента предотвращает закрытие окна.
 */
export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};