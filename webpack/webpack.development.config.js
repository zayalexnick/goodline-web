const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge({
    mode: 'development',
    output: { filename: 'bundle.js' },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve('dist'),
        host: '0.0.0.0',
        port: 1212,
        historyApiFallback: true,
        inline: true,
        noInfo: true,
        hot: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
}, require(path.resolve('webpack', 'webpack.base.config.js')));