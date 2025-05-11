
import { ResolveOptions } from 'webpack';

/**
 * Функция создающая конфигурацию резолверов для Webpack
 * @returns Настройки резолюции модулей
 */
export function buildResolvers(): ResolveOptions {
  return {
    // Автоматически разрешает эти расширения без указания в импортах
    extensions: ['.tsx', '.ts', '.js'],
  };
}