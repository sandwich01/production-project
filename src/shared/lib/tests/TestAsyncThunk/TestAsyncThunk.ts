import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

jest.mock('axios');
/**
 * Тип для функции создания async thunk action.
 *
 * @template Return - Тип успешного результата (`Return`)
 * @template Arg - Тип аргумента, передаваемого в thunk (`Arg`)
 * @template RejectedValue - Тип значения при ошибке (`RejectedValue`)
 *
 * @typedef {Function} ActionCreatorType
 * @param {Arg} arg - Аргумент для вызова async thunk (`Arg`)
 * @returns {AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>} Возвращает thunk-экшен
 */
type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

const mockedAxios = jest.mocked(axios, true);

/**
 * Утилитный класс для тестирования async thunks в Redux.
 *
 * Предоставляет мокнутые методы `dispatch` и `getState`, а также возможность вызова thunk с тестовыми данными.
 *
 * @template Return - Тип успешного результата thunk (`Return`)
 * @template Arg - Тип аргумента, передаваемого в thunk (`Arg`)
 * @template RejectedValue - Тип значения при отклонении (`RejectedValue`)
 */
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    /**
     * Мокнутый dispatch для проверки вызовов экшенов
     *
     * @type {jest.MockedFn<any>}
     */
    dispatch: jest.MockedFn<any>;

    /**
     * Мокнутый getState для предоставления тестового состояния
     *
     * @returns {StateSchema} Тестовое состояние хранилища
     */
    getState: () => StateSchema;

    /**
     * Созданный thunk-экшен, который будет тестироваться
     *
     * @type {ActionCreatorType<Return, Arg, RejectedValue>}
     */
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    /**
     * Конструктор класса
     *
     * @param {ActionCreatorType<Return, Arg, RejectedValue>} actionCreator - Thunk-экшен для тестирования
     */
    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    /**
     * Вызывает thunk-функцию с подготовленным окружением
     *
     * @param {Arg} arg - Аргумент, передаваемый в thunk (`Arg`)
     * @returns {Promise<AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>>} Результат выполнения thunk
     */
    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

        return result;
    }
}