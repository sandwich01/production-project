import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

/**
 * Кнопка-переключатель языков приложения.
 *
 * @component
 * @param {Object} props - Пропсы компонента
 * @param {string} [props.className] - Дополнительный класс для стилизации кнопки
 *
 * @example
 * <LangSwitcher className="header-leng-switcher" />
 */
export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
});