const webpack = require('webpack');
const path = require('path');
const {AngularCompilerPlugin} = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const dirname = process.cwd();

module.exports = {
    entry: './temp/main.ts',
    output: {
        filename: 'mx-gen.[hash].js',
        path: path.resolve(dirname, 'temp/dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader'
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'to-string-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|bmp|gif|woff2?|ttf|eot|svg)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: path.resolve(dirname, 'temp/index.html')
        }),
        new TsconfigPathsPlugin({ configFile: "./temp/tsconfig.app.json" })
    ],
    devServer: {
        contentBase: path.join(dirname, "temp/dist"),
        compress: true,
        port: 9000,
        open: true
    },
    devtool: 'inline-source-map',
    mode: 'development'
}