import { validateValue } from './validateValue';

// Запуск одного сценария тестирования
test('Валидация значения', () => {
    expect(validateValue(50)).toBe(true); // 
});

//Запуск нескольких сценариев тестирования
describe('validateValue', () => {
    test('Валидация значения 50', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('Валидация значения 0', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('Валидация значения 100', () => {
        expect(validateValue(100)).toBe(true);
    });
    test('Валидация значения 150', () => {
        expect(validateValue(150)).toBe(false);
    });
    test('Валидация значения -50', () => {
        expect(validateValue(-50)).toBe(false);
    });
})