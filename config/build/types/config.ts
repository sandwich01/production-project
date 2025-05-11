
/**
 * Режим сборки проекта
 */
export type BuildMode = 'production' | 'development';

/**
 * Пути, используемые в конфигурации сборки
 */
export interface BuildPaths {
    /** Точка входа (index.ts) */
    entry: string;

    /** Выходная директория сборки */
    build: string;

    /** Путь к HTML-файлу */
    html: string;
}

/**
 * Основные параметры сборки
 */
export interface BuildOptions {
    /** Режим сборки */
    mode: BuildMode;

    /** Объект с путями */
    paths: BuildPaths;

    /** Флаг режима разработки */
    isDev: boolean;

    /** Порт для dev сервера */
    port: number;
}

/**
 * Переменные окружения для сборки
 */
export interface BuildEnv {
    /** Режим запуска */
    mode: BuildMode;

    /** Порт для запуска */
    port: number;
}