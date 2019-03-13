const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
    js: path.resolve(CURRENT_WORKING_DIR, 'js'),
    app: path.resolve(CURRENT_WORKING_DIR, 'js/app'),
    dist: path.resolve(CURRENT_WORKING_DIR, 'dist'),
    modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules'),
};