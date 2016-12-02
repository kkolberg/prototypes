'use strict';

//inject dependencies
module.exports = function (response, repo) {

    var handle = function (event, context, callback) {

        if (event && event.path && event.path.includes('heartbeat')) {
            return response(null, { "alive": true }, callback);
        }

        switch (event.httpMethod) {
            case 'GET':
                repo.fetch((err, res) => {
                    response(null, { "response": "functionA GET called", "date": res }, callback);
                });
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
