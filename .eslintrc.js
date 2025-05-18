module.exports = {
    // Указывает глобальные переменные окружения
    env: {
        browser: true, // Доступность браузерных глобальных переменных (window, document и т.д.)
        es2021: true, // Использовать поддержку ECMAScript 2021
    },

    // Расширяем конфигурацию из популярных шаблонов:
    extends: [
        'plugin:react/recommended', // Рекомендованные правила для React от ESLint
        'airbnb', // Стандарт Airbnb (очень популярный стиль)
    ],

    // Парсер для TypeScript:
    parser: '@typescript-eslint/parser',

    // Опции парсера:
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // Включить поддержку JSX (React)
        },
        ecmaVersion: 'latest', // Последняя версия ECMAScript
        sourceType: 'module', // Использовать модульную систему (import/export)
    },

    // Подключаем плагины:
    plugins: [
        'react', // Плагин для проверки React кода
        '@typescript-eslint', // Поддержка правил TypeScript
        'i18next',
    ],

    // Настройки правил ESLint:
    rules: {
        // Отступы в JSX — 4 пробела и игнорируем тернарные операторы
        'react/jsx-indent': [2, 4],
        // Отступы свойств в JSX — 4 пробела
        'react/jsx-indent-props': [2, 4],
        // Общий отступ в JS — 4 пробела
        indent: [2, 4],
        // Разрешить использование JSX в файлах с расширениями .js, .jsx, .tsx
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        // Выключить ошибку при ненайденном импорте (например, через webpack aliases), использую aliases
        'import/no-unresolved': 'off',
        // Не требовать default export
        'import/prefer-default-export': 'off',
        // Предупреждать о неиспользуемых переменных вместо ошибки
        'no-unused-vars': 'warn',
        // Не требовать defaultProps у React компонентов, чтобы использовать именованые
        'react/require-default-props': 'off',
        // Предупредить при использовании {...props} в JSX
        'react/jsx-props-no-spreading': 'warn',
        // Не ограничивать как писать функциональные компоненты
        'react/function-component-definition': 'off',
        // Выключить правило "no-shadow" (перекрытие переменных)
        'no-shadow': 'off',
        // Выключить проверку расширений файлов при импорте
        'import/extensions': 'off',
        // Выключить проверку лишних зависимостей
        'import/no-extraneous-dependencies': 'off',
        // Разрешить использование подчеркиваний в начале переменных (_private)
        'no-underscore-dangle': 'off',
        // Разрешить любой тип перевода строки (LF или CRLF)
        'linebreak-style': ['error', 'windows'], // можно заменить на 'unix' при желании
        // Выводим ошибку при отсутствии перевода внутри файлов jsx
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        // Проверка максимальной длины скроки кода
        'max-len': ['error', { code: 180 }],
        // Не требовать импорт React в файлах с JSX (React 17+)
        'react/react-in-jsx-scope': 'off',
    },

    // Глобальные переменные проекта
    globals: {
        __IS_DEV__: true, // Например, для режима разработки
    },
};
