/**
 * Модель пользователя.
 *
 * @property {string} id - Уникальный идентификатор пользователя.
 * @property {string} username - Имя пользователя (логин).
 */
export interface User {
    id: string;
    username: string;
}

/**
 * Схема состояния пользователя в хранилище.
 *
 * @property {User} [authData] - Авторизованный пользователь. Может быть `undefined`, если пользователь не вошёл в систему.
 */
export interface UserSchema {
    authData?: User;

    _inited: boolean;
}