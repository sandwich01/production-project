import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

/**
 * Функция, возвращающая массив плагинов для webpack.
 *
 * @param {BuildOptions} options - Опции сборки
 * @param {object} options.paths - Пути к файлам проекта
 * @param {string} options.paths.html - Путь к HTML-шаблону
 * @returns {webpack.WebpackPluginInstance[]} Массив экземпляров webpack-плагинов
 */
export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
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
            __IS_DEV__: JSON.stringify(isDev)
        }),

        // Подключение плагина для перерисовки контента при разработке без перезагрузки страницы в браузере
        new webpack.HotModuleReplacementPlugin()
    ];
}
