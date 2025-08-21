/**
 * Режимы сборки проекта.
 *
 * @type
 * @enum {string}
 */
export type BuildMode = 'production' | 'development';

/**
 * Пути к основным директориям и файлам проекта.
 *
 * @interface
 * @property {string} entry - Путь к точке входа (например: src/index.tsx)
 * @property {string} build - Путь к папке сборки (например: dist)
 * @property {string} html - Путь к HTML-шаблону (например: src/index.html)
 * @property {string} src - Путь к исходной директории (например: src)
 */
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

/**
 * Интерфейс переменных окружения, передаваемых в конфигурацию.
 *
 * @interface
 * @property {BuildMode} mode - Режим сборки: development или production
 * @property {number} port - Порт для запуска dev сервера
 */
export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

/**
 * Основные параметры сборки проекта.
 *
 * @interface
 * @property {BuildMode} mode - Режим сборки: development или production
 * @property {BuildPaths} paths - Объект с путями к файлам и папкам проекта
 * @property {boolean} isDev - Флаг режима разработки
 * @property {number} port - Порт для devServer
 * @property {'storybook' | 'frontend' | 'jest'} project - Вариант конфигурации
 */
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}