'use strict';

//inject dependencies
module.exports = function(response) {

    var handle = function(event, context, callback) {


        switch (event.httpMethod) {
            case 'GET':
                response(null, { "response": "GET called" }, callback);
                break;
            case 'POST':
                response(null, {
                    "response": "POST called",
                    "data": JSON.parse(event.body)
                }, callback);
                break;
            default:
                done(new Error('Unsupported method "${event.httpMethod}"'));
        }
    };

    return {
        'handle': handle
    };
};
