// Оставляем только числовые значения если такие есть и выводим их как строки
export const mapArrToString = (arr: any[]) => {
    return arr
        .filter(item => Number.isInteger(item))
        .map(String)
}