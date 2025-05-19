// Функция возведения в степень
export const square = (value: number) => {
    if (value === 1) {
        return value
    }
    return Math.pow(value, 2) // Возводим в степень
}