import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

/**
 * Кастомный компонент текстового поля (Input) с управлением фокусом и отображением текстового курсора (caret).
 *
 * @param {InputProps} props - Свойства компонента.
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @param {string} [props.value] - Значение текстового поля.
 * @param {(value: string) => void} [props.onChange] - Колбэк при изменении значения.
 * @param {boolean} [props.autofocus] - Автофокус при монтировании компонента.
 * @param {string} [props.type] - Тип input (по умолчанию `'text'`).
 * @param {string} [props.placeholder] - Плейсхолдер.
 * @param {any} [otherProps] - Остальные HTML-атрибуты input (например, `name`, `disabled`, `maxLength` и т.д.).
 *
 * Функциональность:
 * - Устанавливает автофокус при монтировании, если `autofocus` = true.
 * - Обрабатывает изменение текста и позицию каретки (caret).
 * - Отображает визуальную каретку (анимация/позиция курсора).
 * - Рендерит плейсхолдер перед вводом (например, `Введите имя>`).
 *
 * Использует:
 * - `classNames` — утилита для динамического объединения классов.
 * - `memo` — оптимизация повторного рендера, если пропсы не изменились.
 */
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
