import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

/**
 * Функция, возвращающая основную конфигурацию Webpack.
 *
 * @param {BuildOptions} options - Объект с настройками сборки
 * @param {string} options.mode - Режим сборки: 'development' или 'production'
 * @param {boolean} options.isDev - Флаг режима разработки
 * @param {object} options.paths - Объект с путями к файлам проекта
 * @returns {webpack.Configuration} Конфигурация Webpack
 */
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode, // Режим сборки (development / production)
        entry: paths.entry, // Точка входа приложения (обычно src/index.ts)
        output: {
            filename: '[name].[contenthash].js', // Имя выходного JS-файла с хэшем для кэширования
            path: paths.build, // Папка, куда будет собираться проект (например, dist)
            clean: true, // Очищать папку перед новой сборкой
        },
        plugins: buildPlugins(options), // Подключённые плагины (HTML, CSS экстрактор и т.д.)
        module: {
            rules: buildLoaders(options), // Лоадеры для обработки файлов (TypeScript, CSS, SVG и др.)
        },
        resolve: buildResolvers(options), // Настройки резолвера (расширения, алиасы и т.д.)
        devtool: isDev ? 'inline-source-map' : undefined, // Поддержка source map в dev-режиме
        devServer: isDev ? buildDevServer(options) : undefined, // Настройки dev-server в dev-режиме
    };
}