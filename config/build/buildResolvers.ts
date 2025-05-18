import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

/**
 * Функция, возвращающая настройки резолвера для webpack.
 *
 * @param {BuildOptions} options - Опции сборки
 * @param {object} options.paths - Пути к файлам проекта
 * @param {string} options.paths.src - Путь к исходным файлам (src)
 * @returns {ResolveOptions} Конфигурация webpack-резолвера
 */
export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        // При импорте можно опускать указанные расширения
        extensions: ['.tsx', '.ts', '.js'],

        // Использовать абсолютные пути относительно проекта
        preferAbsolute: true,

        // Каталоги, в которых webpack будет искать модули
        modules: [options.paths.src, 'node_modules'],

        // Файлы, которые будут подключаться при импорте директории
        mainFiles: ['index'],

        // Алиасы для путей (пока пустые)
        alias: {},
    };
}
