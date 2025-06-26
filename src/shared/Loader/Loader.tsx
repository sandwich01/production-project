import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * Компонент Loader (индикатор загрузки)
 *
 * Отображает спиннер (кольцевую анимацию загрузки) с возможностью добавить пользовательский класс.
 * Используется для визуального обозначения процесса загрузки данных или ожидания.
 *
 * @component
 * @param {Object} props - Свойства компонента
 * @param {string} [props.className] - Дополнительный класс для кастомизации стилей
 *
 * @example
 * return (
 *   <Loader className="custom-loader" />
 * )
 */
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);