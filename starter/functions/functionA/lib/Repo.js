'use strict';

//inject dependencies
module.exports = function (request) {

    var fetch = function (callback) {
        request.get({
            url: 'http://www.timeapi.org/utc/now.json',
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/602.2.14 (KHTML, like Gecko) Version/10.0.1 Safari/602.2.14'
            }
        }, (err, res, body) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, JSON.parse(body));
            }
        });
    };

    return {
        'fetch': fetch
    };
};
