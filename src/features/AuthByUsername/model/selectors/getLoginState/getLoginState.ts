import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from '../../types/loginSchema';

/**
 * Возвращает состояние формы входа из корневого состояния приложения.
 *
 * @param state - Корневое состояние приложения, типизированное через `StateSchema`.
 * @returns Состояние формы входа (`loginForm`) или `undefined`, если путь не существует.
 */
export const getLoginState = (state: StateSchema): LoginSchema | undefined => state?.loginForm;
