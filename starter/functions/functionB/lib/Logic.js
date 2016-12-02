'use strict';

//inject dependencies
module.exports = function (response, repo) {

    var handle = function (event, context, callback) {
        if (event && event.path && event.path.includes('heartbeat')) {
            return response(null, { "alive": true }, callback);
        }

        switch (event.httpMethod) {
            case 'GET':
                repo.fetch().then((body) => {
                    response(null, { "response": "functionB GET called", "date": body }, callback)
                }, (err) => {
                    response(err, null, callback);
                });
                break;
            case 'POST':
                response(null, {
                    "response": "functionB POST called",
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
