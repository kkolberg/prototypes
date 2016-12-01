var assert = require('chai').assert;

var logicFunc = require('../../../../functions/functionA/lib/Logic');

describe('Logic', function () {
    it('should successfully get call', function () {
        var event = {
            "httpMethod": "GET"
        };

        var cb = function (err, res) {
            assert.isNotNull(err);

            assert.isNotNull(res);
            assert.equal(res.response, "functionA GET called");
        };

        var responseMock = function (err, res, callback) {
            callback(null, res);
        };

        var repoMock = {
            'fetch': function (cb) {
                cb(null, {});
            }
        };

        var logic = logicFunc(responseMock, repoMock);

        logic.handle(event, context, cb);
    });
});
