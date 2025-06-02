import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

/**
 * Компонент NotFoundPage (Страница не найдена)
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
 *   <NotFoundPage className="custom-not-found" />
 * )
 */
const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;
