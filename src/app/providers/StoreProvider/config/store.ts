import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

/**
 * Функция для создания Redux-хранилища (store) с начальным состоянием.
 *
 * @param {StateSchema} [initialState] - Необязательное начальное состояние хранилища.
 * @returns {EnhancedStore<StateSchema>} Настроенное Redux-хранилище.
 *
 * Внутри:
 * - Определяются редьюсеры для частей состояния
 * - Используется configureStore (из Redux Toolkit) для создания store.
 * - Включаются Redux DevTools, если приложение в режиме разработки (__IS_DEV__).
 */
export function createReduxStore(initialState?: StateSchema) {
    // Корневой reducer
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
