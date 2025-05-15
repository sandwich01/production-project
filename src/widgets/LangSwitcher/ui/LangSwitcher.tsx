import { FC } from "react";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

/**
 * Интерфейс свойств для компонента LangSwitcher.
 *
 */
interface LangSwitcherProps {
    className?: string;
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
const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const {
        className
    } = props;

    const { t, i18n } = useTranslation();

    const toggleLeng = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? "en" : "ru")
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLeng}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t("Русский")}
        </Button>
    );
};

export default LangSwitcher;