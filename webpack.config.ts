/**
 * @fileoverview Точка входа для конфигурации Webpack.
 * Формирует и возвращает конфигурацию сборки на основе переданных параметров окружения.
 * @module webpack.config
 */

import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import path from 'path';

/**
 * Функция экспорта конфигурации Webpack
 * @function
 * @param {BuildEnv} env - Переменные окружения, содержащие параметры сборки
 * @returns {webpack.Configuration} Сконфигурированный объект Webpack
 */
export default (env: BuildEnv) => {
  /**
   * Объект путей для конфигурации сборки
   * @type {BuildPaths}
   */
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  /**
   * Режим сборки (development/production)
   * @type {'development' | 'production'}
   */
  const mode = env.mode || 'development';

  /**
   * Флаг режима разработки
   * @type {boolean}
   */
  const isDev = mode === 'development';

  /**
   * Порт для локального сервера разработки
   * @type {number}
   */
  const PORT = env.port || 3000;

  /**
   * Основная конфигурация Webpack, построенная на основе параметров
   * @type {webpack.Configuration}
   */
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
