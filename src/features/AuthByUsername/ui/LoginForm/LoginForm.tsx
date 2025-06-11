import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

/**
 * Компонент формы авторизации (LoginForm).
 *
 * @param {LoginFormProps} props - Свойства компонента.
 * @param {string} [props.className] - Дополнительный CSS-класс для стилизации контейнера формы.
 *
 * Внутри:
 * - Отображаются два текстовых поля: для ввода имени пользователя и пароля.
 * - Кнопка для отправки формы.
 */
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
