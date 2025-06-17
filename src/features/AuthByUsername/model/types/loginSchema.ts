/**
 * Интерфейс формы авторизации пользователя
 * @property {string} username Имя пользователя для авторизации (`string`)
 * @property {string} password Пароль для авторизации (`string`)
 * @property {boolean} isLoading Флаг загрузки авторизации (`boolean`)
 * @property {string | undefined} error Необязательно поле для вывода ошибки авторизации (`string` или `undefined`)
 */
export interface LoginSchema {
    /**
     * Имя пользователя для авторизации
     */
    username: string;
    /**
    * Пароль для авторизации
    */
    password: string;
    /**
     * Флаг загрузки авторизации
     */
    isLoading: boolean;
    /**
     * Необязательное поле для вывода ошибки авторизации
     */
    error?: string;
}
