'use strict';

//inject dependencies
module.exports = function (request) {

    var fetch = function (callback) {
        request.get({
            url: 'http://www.google.com'
        }, (err, res) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, res.body);
            }
        });
    };

    return {
        'fetch': fetch
    };
};
