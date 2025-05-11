import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

/**
 * Функция создающая конфигурацию для webpack-dev-server
 * @param options - параметры сборки
 * @returns Конфигурация сервера разработки
 */
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true //Проксирует запросы через корневую страницу (SPA)
  };
}