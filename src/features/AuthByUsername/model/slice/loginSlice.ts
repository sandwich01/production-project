import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

/**
 * Начальное состояние для login-слайса
 *
 * @type {LoginSchema}
 */
const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
};

/**
 * Redux-слайс, отвечающий за состояние формы логина
 * Содержит редьюсеры для обновления полей формы и обработку асинхронного логина
 */
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        /**
         * Обновляет имя пользователя в состоянии
         *
         * @param {LoginSchema} state - Текущее состояние login-слайса (`LoginSchema`)
         * @param {PayloadAction<string>} action - Действие с новым значением имени пользователя (`PayloadAction<string>`)
         */
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },

        /**
         * Обновляет пароль в состоянии
         *
         * @param {LoginSchema} state - Текущее состояние login-слайса (`LoginSchema`)
         * @param {PayloadAction<string>} action - Действие с новым значением пароля (`PayloadAction<string>`)
         */
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            /**
             * Обрабатывает начало запроса логина, обнуляем ошибку, если она была и запускаем лоадер
             */
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            /**
             * Обрабатывает успешный результат авторизации и выключаем лоадер
             */
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            /**
             * Обрабатывает ошибку при авторизации
             */
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

/**
 * Экшены, экспортируемые из login-слайса
 */
export const { actions: loginActions } = loginSlice;

/**
 * Редьюсер, экспортируемый из login-слайса
 */
export const { reducer: loginReducer } = loginSlice;
