import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

/**
 * Компонент загрузки страницы (PageLoader)
 *
 * Используется для отображения индикатора загрузки во время ожидания данных или перехода между страницами.
 * Оборачивает Loader в div с возможностью добавления пользовательского класса.
 *
 * @component
 * @param {Object} props - Свойства компонента
 * @param {string} [props.className] - Дополнительный класс для стилизации контейнера
 *
 * @example
 * return (
 *   <PageLoader className="custom-loader" />
 * )
 */
const PageLoader: FC<PageLoaderProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};

export default PageLoader;
