import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/**
* Обрабатывает .scss/.sass файлы, поддерживает CSS-модули и автопрефиксы.
*
* В dev режиме сборки — инжектит стили через style
*
* В prod режиме сборки — выносит в отдельные файлы
*/
export function buildCssLoader(isDev: boolean) {
    return {
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
}
