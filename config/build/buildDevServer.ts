import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

/**
 * Функция для создания конфигурации webpack-dev-server.
 *
 * @param {BuildOptions} options - Объект с настройками сборки
 * @param {number} options.port - Порт для запуска dev сервера
 * @returns {DevServerConfiguration} Конфигурация для webpack-dev-server
 */
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}