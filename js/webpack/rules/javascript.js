const PATHS = require('../paths');

module.exports = () => ({
    test: /\.js$/,
    exclude: PATHS.modules,
    use: [{
        loader: "babel-loader"
    }]
});