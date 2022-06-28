const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    entry: './src/index.ts',

    mode: isProduction ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: { port: 4200 },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.scss$/,
                use: ['css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './src/css/img', to: 'css/img' },
                {
                    from: './src/css/stratos/StratosLCWeb-Regular.ttf',
                    to: 'css/stratos',
                },
                { from: './src/css/favicon.ico', to: 'css' },
            ],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: isProduction,
            },
        }),
        new CssMinimizerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
        }),
    ],

    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    devtool: isProduction ? 'hidden-source-map' : 'source-map',
}
