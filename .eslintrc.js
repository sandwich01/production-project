module.exports = {
    // Указывает глобальные переменные окружения
    env: {
        browser: true, // Доступность браузерных глобальных переменных (window, document и т.д.)
        es2021: true, // Использовать поддержку ECMAScript 2021
        jest: true, // Используем jest для тестирования
    },

    // Расширяем конфигурацию из популярных шаблонов:
    extends: [
        'plugin:react/recommended', // Рекомендованные правила для React от ESLint
        'airbnb', // Стандарт Airbnb (очень популярный стиль)
        'plugin:i18next/recommended',
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
        'i18next', // Плагин переводов
        'jest', // Плагин тестирования
        'react-hooks', // Плагин для обработки хуков в FC
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
        // Выключить ошибку при ненайденном импорте (например, через webpack aliases), используем aliases
        'import/no-unresolved': 'off',
        // Не требовать default export
        'import/prefer-default-export': 'off',
        // Отключаем стандартное правило, так как оно не учитывает специфику TypeScript
        'no-unused-vars': 'off',
        // Включаем правило поиска неиспользуемых переменных для TypeScript — как предупреждение
        '@typescript-eslint/no-unused-vars': ['warn'],
        // Не требовать defaultProps у React компонентов, чтобы использовать именованные
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
        // Отключаем проверку перехода строки
        'linebreak-style': 'off', // можно заменить на 'unix' при желании
        // Выводим ошибку при отсутствии перевода внутри файлов jsx
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            },
        ],
        // Проверка максимальной длины строки кода
        'max-len': ['error', { code: 180 }],
        // Не требовать импорт React в файлах с JSX (React 17+)
        'react/react-in-jsx-scope': 'off',
        // Проверка соблюдения правил хуков React
        'react-hooks/rules-of-hooks': 'error',
        // Проверка зависимостей в useEffect и других хуках
        'react-hooks/exhaustive-deps': 'error',
        // Отключаем обязательные обработчики событий клавиатуры при клике
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        // Разрешаем менять параметры функции (например, state в redux)
        'no-param-reassign': 'off',
        // Запрещаем пустую строку в конце файла
        'eol-last': ['error', 'never'],
        // Запрещаем пустую строку после return
        'padding-line-between-statements': [
            'error',
            { blankLine: 'never', prev: 'return', next: '*' },
        ],
        // Отключаем проверку PropTypes, потому что используем TypeScript
        'react/prop-types': 'off',
        // Разрешить использование {...props} в JSX
        'react/jsx-props-no-spreading': 'off',
        'no-undef': 'off',
    },

    // Глобальные переменные проекта
    globals: {
        __IS_DEV__: true, // Например, для режима разработки
        __API__: true,
    },

    // Переопределение правил для тестов и stories
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
