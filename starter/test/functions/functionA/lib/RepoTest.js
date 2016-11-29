var assert = require('chai').assert;

var repoFunc = require('../../../../functions/functionA/lib/Repo');

describe('Repo', function () {
    it('should fetch data', function () {
        var cb = function (err, res) {
            assert.isNull(err);
            assert.isNotNull(res);
        };

        var mockRequest = {
            'get': function (opts, callback) {
                callback(null, {});
            }
        };

        var repo = repoFunc(mockRequest);

        repo.fetch(cb);
    });

    it('should return err', function () {
        var cb = function (err, res) {
            assert.isNotNull(err);
            assert.isNull(res);
        };

        var mockRequest = {
            'get': function (opts, callback) {
                callback({}, null);
            }
        };

        var repo = repoFunc(mockRequest);

        repo.fetch(cb);
    });
});