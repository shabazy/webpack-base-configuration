const PATHS = require('./paths');
const rules = require('./rules');
const externals = require('./externals');
const resolve = require('./resolve');
const plugins = require('./plugins');

const isProduction = process.env.NODE_ENV === 'production';
const node = {__dirname: true, __filename: true};

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        bundle: './js/app/index',
        css: './css/base',
    },
    output: {
        path: PATHS.dist,
        filename: "[name].js",
        chunkFilename: '[name].bundle.[ext]'
    },
    module: {
        rules: rules({production: isProduction}),
    },
    node,
    externals,
    plugins: plugins({production: isProduction}),
    resolve,
};