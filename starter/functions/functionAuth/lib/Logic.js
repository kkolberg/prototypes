'use strict';

//inject dependencies
module.exports = function (response, repo) {

    var handle = function (event, context, callback) {
        if (event && event.path && event.path.includes('heartbeat')) {
            return response(null, { "alive": true }, callback);
        }

        repo.fetch(event.authorizationToken, event.methodArn, (err, res) => {
            callback(null, res);
        });
    };

    return {
        'handle': handle
    };
};
