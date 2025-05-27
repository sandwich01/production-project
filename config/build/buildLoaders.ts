import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

/**
 * Функция, возвращающая массив webpack-loader'ов на основе режима разработки.
 *
 * @param {BuildOptions} options - Опции сборки
 * @param {boolean} options.isDev - Режим разработки (development)
 * @returns {webpack.RuleSetRule[]} Массив правил (лоадеров) для webpack
 */
export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    /**
    * Обрабатывает .scss/.sass файлы, поддерживает CSS-модули и автопрефиксы.
    *
    * В dev режиме сборки — инжектит стили через style
    *
    * В prod режиме сборки — выносит в отдельные файлы
    */
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

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
    const babelLoader = {
        test: /\.(ts|js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

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
