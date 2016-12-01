'use strict';

// wire up all dependencies
var request = require('request');
var repo = require('./lib/Repo')(request);
var logic = require('./lib/Logic')(repo);


// Lambda Handler
module.exports.handler = function (event, context, callback) {

  context.callbackWaitesForEmptyEventLoop = false;

  logic.handle(event, context, callback);

};
