'use strict';

// wire up all dependencies
var response = require('../lib/ResponseHandler');
var rp = require('request-promise-native');
var repo = require('./lib/Repo')(rp);
var logic = require('./lib/Logic')(response,repo);

// Lambda Handler
module.exports.handler = function (event, context, callback) {

  context.callbackWaitesForEmptyEventLoop = false;

  logic.handle(event, context, callback);

};
