import { mapArrToString } from './mapArrToString';

//Запуск нескольких сценариев тестирования
describe('mapArrToString', () => {
    test('Валидные значения', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']); // toEqual глубокое сравнение именно садержимое, не ссылки и их равенства
    })
    test('Мешанина', () => {
        expect(mapArrToString([1, 2, 3, null, 'awawf', undefined, '123'])).toEqual(['1', '2', '3']);
    })
    test('Пустой массив', () => {
        expect(mapArrToString([])).toEqual([]);
    })
    test('Отрицание', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual(['1', '2', '3', '4']); // Проверка когда не должно быть равно результату
    })
})