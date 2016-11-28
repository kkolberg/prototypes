'use strict';

// wire up all dependencies
var response = require('../lib/ResponseHandler');
var logic = require('./lib/Logic')(response);

// Lambda Handler
module.exports.handler = function (event, context, callback) {

  context.callbackWaitesForEmptyEventLoop = false;

  logic.handle(event, context, callback);

};
