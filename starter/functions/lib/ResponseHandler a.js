'use strict';

module.exports = function () {
    var done = function (err, res, callback) {
        callback(null, {
            statusCode: err ? '400' : '200',
            body: err ? JSON.stringify({ error: err.message }) : JSON.stringify(res),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    return done;

} ();