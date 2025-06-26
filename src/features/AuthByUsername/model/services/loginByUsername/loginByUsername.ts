import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

/**
 * Интерфейс для входных данных аутентификации пользователя по имени и паролю
 *
 * @property {string} username - Имя пользователя (`string`)
 * @property {string} password - Пароль пользователя (`string`)
 */
interface LoginByUsernameProps {
    username: string;
    password: string;
}

/**
 * Асинхронный thunk-экшен для авторизации пользователя по имени и паролю
 *
 * Выполняет POST-запрос на сервер для аутентификации При успешной авторизации:
 * - Сохраняет данные пользователя в localStorage
 * - Диспатчит действие `setAuthData` из слайса `user`
 *
 * @param {LoginByUsernameProps} authData - Объект с данными для аутентификации: имя пользователя и пароль
 * @returns {Promise<User>} Промис резолвящий данные пользователя при успехе или строку ошибки при провале
 */
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);