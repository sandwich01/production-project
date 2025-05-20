import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundePage.module.scss';

interface NotFoundePageProps {
    className?: string;
}

/**
 * Компонент NotFoundePage (Страница не найдена)
 *
 * Отображает страницу с сообщением "Страница не найдена". Поддерживает кастомизацию класса.
 * Используется как fallback-страница при переходе по несуществующему маршруту.
 *
 * @component
 * @param {Object} props - Свойства компонента
 * @param {string} [props.className] - Дополнительный класс для стилизации контейнера
 *
 * @example
 * return (
 *   <NotFoundePage className="custom-not-found" />
 * )
 */
const NotFoundePage: FC<NotFoundePageProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundePage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundePage;
