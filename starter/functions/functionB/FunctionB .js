'use strict';

// wire up all dependencies
var response = require('../lib/responsehandler');
var logic = require('./lib/logic')(response);

// Lambda Handler
module.exports.handler = function (event, context, callback) {

  context.callbackWaitesForEmptyEventLoop = false;

  logic.handle(event, context, callback);

};
