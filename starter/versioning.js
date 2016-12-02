'use strict';

var pjson = require('./package.json');
var mode = process.env.NODE_ENV;
var isNotLocal = process.env.IS_NOT_LOCAL;
var version = process.env.TAG;

module.exports.version = function () {
    if (mode !== 'production') {
        return '';
    }

    return '-v' + version;
};

// module.exports.plugins = function () {
//     if (isNotLocal) {
//         return '';
//     }
    
//     return '- serverless-offline';
// };