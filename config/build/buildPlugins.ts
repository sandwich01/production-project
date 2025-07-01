import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

/**
 * Функция, возвращающая массив плагинов для webpack.
 *
 * @param {BuildOptions} options - Опции сборки
 * @param {object} options.paths - Пути к файлам проекта
 * @param {string} options.paths.html - Путь к HTML-шаблону
 * @returns {webpack.WebpackPluginInstance[]} Массив экземпляров webpack-плагинов
 */
export function buildPlugins({ paths, isDev, apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        // Генерирует HTML-файл на основе шаблона и внедряет туда бандлы
        new HtmlWebpackPlugin({
            template: paths.html,
        }),

        // Отображает прогресс сборки в консоли
        new webpack.ProgressPlugin(),

        // Извлекает CSS в отдельные файлы с хэшами для кэширования
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),

        // Подключение глобальных переменных для всего проекта
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
    ];

    if (isDev) {
        // Подключение плагина для перерисовки контента при разработке без перезагрузки страницы в браузере
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }

    return plugins;
}