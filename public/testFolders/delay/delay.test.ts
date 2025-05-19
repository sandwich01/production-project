import { delay } from './delay';

//Запуск нескольких сценариев тестирования
describe('delay', () => {
    test('Валидные значения delay', async () => {
        const sum = await delay(() => 5 + 5, 1000)
        expect(sum).toBe(10); // toEqual глубокое сравнение именно садержимое, не ссылки и их равенства
    })
})