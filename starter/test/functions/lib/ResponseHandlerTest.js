var assert = require('chai').assert;
var responseHandler = require('../../../functions/lib/ResponseHandler');

describe('ResponseHandler', function () {
    it('should return 200', function () {
        responseHandler(null, {}, (err, resp) => {
            assert.equal(resp.statusCode, 200);
        });
    });
});