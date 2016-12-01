'use strict';

//inject dependencies
module.exports = function (repo) {

    var handle = function (event, context, callback) {
        repo.fetch(event.authorizationToken, event.methodArn, (err, res) => {
            callback(null, res);
        });
    };

    return {
        'handle': handle
    };
};
