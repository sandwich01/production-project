import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { memo } from 'react';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

/**
 * Компонент страницы ошибки, отображающий сообщение о критической ошибке и кнопку для перезагрузки страницы.
 *
 * @component
 * @param {Object} props - Пропсы компонента.
 * @param {string} [props.className] - Дополнительный CSS-класс для стилизации.
 *
 * @example
 * <ErrorPage className="custom-error-style" />
 */
export const ErrorPage = memo(({ className }: ErrorPageProps) => {
    const { t } = useTranslation('translation');

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
});