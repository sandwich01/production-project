
type Mods = Record<string, boolean | string>

/**
 * Утилитная функция для объединения CSS-классов с поддержкой условных модификаторов.
 *
 * @param cls - Базовый класс (обязательный)
 * @param mods - Объект с модификаторами, где ключ — имя класса, значение — условие включения (true/false или строка)
 * @param additional - Массив дополнительных классов, которые можно добавить
 * @returns Строка из объединённых классов
 *
 * @example
 * classNames('button', { primary: true, disabled: false }, ['large', 'rounded'])
 * // вернёт: "button large rounded primary"
 */
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}



