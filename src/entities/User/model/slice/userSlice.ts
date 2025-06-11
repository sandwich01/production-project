import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {};

/**
 * Redux-слайс для управления состоянием пользователя.
 *
 * - `initialState`: начальное состояние пользователя (пустой объект).
 * - `userSlice`: создаёт slice с именем 'user' и пустыми редьюсерами (будут добавлены позже).
 * - `userActions`: объект с action creators (сейчас пустой, но будет использоваться при добавлении редьюсеров).
 * - `userReducer`: редьюсер для user-состояния, используется в корневом редьюсере.
 */
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
