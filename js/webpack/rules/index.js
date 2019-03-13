const javascript = require('./javascript');
const css = require('./css');

module.exports = ({production = false}) =>  ([
    javascript({production}),
    css({production}),
]);