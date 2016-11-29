'use strict';

//inject dependencies
module.exports = function (response, repo) {

    var handle = function (event, context, callback) {

        repo.fetch((err, res) => { });

        switch (event.httpMethod) {
            case 'GET':
                response(null, { "response": "functionA GET called" }, callback);
                break;
            case 'POST':
                response(null, {
                    "response": "functionA POST called",
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
