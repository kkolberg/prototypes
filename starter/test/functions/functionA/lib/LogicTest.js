var assert = require('chai').assert;

var rh = function (err, res, callback) {
    callback(err, res);
}

var logic = require('../../../../functions/functionA/lib/Logic')(rh);

describe('Logic', function () {
    it('should successfully get call', function () {
        var event = {
            "httpMethod": "GET"
        };

        var callback = function (err, res) {
            assert.isNull(err);

            assert.isNotNull(res);
            assert.equal(res.response, "functionA GET called");
        };

        logic.handle(event, context, callback);
    });
});