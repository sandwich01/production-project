import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

/**
 * Функция, возвращающая массив webpack-loader'ов на основе режима разработки.
 *
 * @param {BuildOptions} options - Опции сборки
 * @param {boolean} options.isDev - Режим разработки (development)
 * @returns {webpack.RuleSetRule[]} Массив правил (лоадеров) для webpack
 */
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const cssLoader = buildCssLoader(isDev);

    /**
    * Компилирует TypeScript в JavaScript. Поддерживает .ts и .tsx файлы.
    *
    * Если не используем тайпскрипт - нужен babel-loader
    */
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    /**
    * Преобразует SVG в React-компоненты через SVGR , чтобы использовать как JSX.
    */
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    /**
     * Загружает изображения и возвращает пути к ним.
     *
     * Используется для ресурсов, отличных от SVG.
     */
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [{
            loader: 'fileLoader',
        }],
    };

    /**
     * Запуск транспилятора babel с плагином для сборки ключей переводов
     *
     */
    const babelLoader = buildBabelLoader(options);

    /**
     *  Порядок loaders очень важен для сборки!!!
     */
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}