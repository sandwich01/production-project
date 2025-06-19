import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

/**
 * Создаёт менеджер редьюсеров, который позволяет динамически добавлять и удалять редьюсеры из хранилища.
 *
 * @param {ReducersMapObject<StateSchema>} initialReducers - Объект с начальными редьюсерами (`ReducersMapObject<StateSchema>`)
 * @returns {ReducerManager} Менеджер редьюсеров, предоставляющий методы `add`, `remove`, `reduce` и `getReducerMap`
 */
export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];

    return {
        /**
         * Возвращает текущий маппинг редьюсеров
         *
         * @returns {ReducersMapObject<StateSchema>} Текущий объект с редьюсерами
         */
        getReducerMap: () => reducers,

        /**
         * Основная функция редьюсера, обрабатывающая состояние и действия.
         * Перед вызовом основного редьюсера очищает устаревшие части состояния, если нужно.
         *
         * @param {StateSchema} state - Текущее состояние приложения (`StateSchema`)
         * @param {AnyAction} action - Действие Redux (`AnyAction`)
         * @returns {StateSchema} Новое состояние после применения редьюсера
         */
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },

        /**
         * Добавляет новый редьюсер в менеджер по указанному ключу
         *
         * @param {StateSchemaKey} key - Ключ, по которому будет зарегистрирован редьюсер (`StateSchemaKey`)
         * @param {Reducer} reducer - Редьюсер, который нужно добавить (`Reducer`)
         */
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },

        /**
         * Удаляет редьюсер из менеджера по указанному ключу
         *
         * @param {StateSchemaKey} key - Ключ редьюсера, который нужно удалить (`StateSchemaKey`)
         */
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
