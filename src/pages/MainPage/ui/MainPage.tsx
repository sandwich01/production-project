import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('main');

    return (
        <div className={classNames('', {}, [className])}>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
