import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/user';

/**
 * Начальное состояние для user-слайса.
 *
 * @type {UserSchema}
 */
const initialState: UserSchema = {};

/**
 * Redux-слайс, отвечающий за состояние пользователя (`authData`)
 *
 * Содержит редьюсеры:
 * - `setAuthData` — устанавливает данные авторизованного пользователя
 * - `initAuthData` — инициализирует данные из localStorage при загрузке приложения
 * - `logout` — очищает данные пользователя и удаляет их из localStorage
 */
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /**
         * Устанавливает данные пользователя в состояние после успешной авторизации
         */
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        /**
         * Инициализирует данные пользователя из localStorage при загрузке приложения
         */
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        /**
         * Очищает данные пользователя из состояния и localStorage
         */
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

/**
 * Экшены, связанные с состоянием пользователя
 */
export const { actions: userActions } = userSlice;

/**
 * Редьюсер для состояния пользователя
 */
export const { reducer: userReducer } = userSlice;