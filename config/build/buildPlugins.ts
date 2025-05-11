import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from 'config/build/types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/**
 * Функция для создания массива плагинов Webpack
 * @param paths - объект с путями проекта
 * @returns Массив экземпляров плагинов
 */
export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html, // Используем указанный HTML-файл как шаблон
    }),
    new webpack.ProgressPlugin(), // Выводит прогресс сборки в консоль
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    })
  ];
}