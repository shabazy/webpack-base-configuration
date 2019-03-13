const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = ({production = false} = {}) => {
    if (production) {
        const MinifyPlugin = require("babel-minify-webpack-plugin");
        return [
            new BundleTracker({
                filename: './webpack-stats.json'
            }),
            new MinifyPlugin(),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            }),
            new webpack.IgnorePlugin(/\.\/locale$/, /moment$/),
            new ExtractTextPlugin(
                {
                    filename: 'bundle.css',
                }
            ),
        ];
    }
    else {
        return [
            new BundleTracker({
                filename: './webpack-stats.json'
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('development'),
                },
            }),
            new webpack.IgnorePlugin(/\.\/locale$/, /moment$/),
            new ExtractTextPlugin(
                {
                    filename: 'bundle.css',
                }
            ),
        ];
    }
};