import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

/**
 * Маппинг редьюсеров, где ключ — это ключ из `StateSchemaKey`, а значение — сам редьюсер
 *
 * @typedef {Object} ReducersList
 * @property {[name in StateSchemaKey]?} Reducer - Сопоставление редьюсеров с частями состояния
 */
export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

/**
 * Представление пары [ключ редьюсера, редьюсер]
 *
 * @typedef {Array} ReducersListEntry
 * @property {StateSchemaKey} 0 - Ключ схемы состояния (`StateSchemaKey`)
 * @property {Reducer} 1 - Редьюсер (`Reducer`)
 */
type ReducersListEntry = [StateSchemaKey, Reducer];

/**
 * Пропсы для DynamicModuleLoader
 *
 * @property {ReducersList} reducers - Объект с редьюсерами, которые нужно подключить
 * @property {boolean} [removeAfterUnmount] - Флаг, указывающий, удалять ли редьюсеры после размонтирования компонента
 */
interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

/**
 * Компонент для динамического подключения и отключения редьюсеров.
 * Используется при lazy-загрузке модулей для управления состоянием.
 *
 * @param {DynamicModuleLoaderProps} props - Пропсы компонента
 */
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};