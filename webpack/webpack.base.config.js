const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [ path.resolve('src', 'index.tsx') ],
    output: { path: path.resolve('dist'), publicPath: '/' },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.json' ],
        alias: {
            '~': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/assets/',
                    outputPath: 'assets/'
                }
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve('src', 'index.html'),
            inject: 'body'
        })
    ]
};