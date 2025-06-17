import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

/**
 * Описание общей схемы состояния (StateSchema) приложения.
 * Содержит поля:
 * - user: часть состояния, связанная с пользователем (`UserSchema`).
 * - loginForm: часть состояния, связаная с формой логина (`LoginSchema`).
 *
 * Это интерфейс, который описывает, какие данные хранятся в общем состоянии приложения.
 */
export interface StateSchema {
    user: UserSchema;
    loginForm: LoginSchema;
}
