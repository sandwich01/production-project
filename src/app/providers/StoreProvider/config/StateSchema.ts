import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

/**
 * Описание общей схемы состояния (StateSchema) приложения.
 *
 * Содержит два поля:
 * - counter: часть состояния, связанная со счётчиком (CounterSchema).
 * - user: часть состояния, связанная с пользователем (UserSchema).
 *
 * Это интерфейс, который описывает, какие данные хранятся в общем состоянии приложения — например, в Redux или другом state-менеджере.
 */
export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
