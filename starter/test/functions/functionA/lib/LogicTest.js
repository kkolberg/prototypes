var assert = require('chai').assert;
var responseHandler = require('../../../functions/functionA/lib/Logic');

describe('ResponseHandler', function () {
    it('should return 200', function () {
        responseHandler(null, {}, (err, resp) => {
            assert.equal(resp.statusCode, 200);
        });
    });

    it('should return 400', function () {
        responseHandler({}, null, (err, resp) => {
            assert.equal(resp.statusCode, 400);
        });
    });
});