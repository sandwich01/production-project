import { BuildOptions } from './types/config';
import webpack from 'webpack';
import path from 'path';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

/**
 * Основная функция для построения конфигурации Webpack
 * @param options - параметры сборки
 * @returns Полная конфигурация Webpack
 */
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry, // Точка входа приложения
    output: {
      filename: '[name].[contenthash].js', // Имя выходного файла
      path: paths.build, // Директория для сборки
      clean: true, // Очищает папку build перед новой сборкой
    },
    plugins: buildPlugins(options), // Подключаем плагины
    module: {
      rules: buildLoaders(options), // Настраиваем лоадеры
    },
    resolve: buildResolvers(), // Настраиваем резолверы путей
    devtool: isDev ? 'inline-source-map' : undefined, // Настройка source map
    devServer: isDev ? buildDevServer(options) : undefined, // Сервер разработки
  };
}