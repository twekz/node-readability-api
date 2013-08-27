var assert = require('assert');

describe('readability', function () {
  
  var readability = require('../index');

  describe('.reader()', function () {
    it('should expose the reader constructor', function () {
      var reader = require('../lib/reader');
     
      assert.equal(readability.reader, reader);
    });
  });

  describe('.configure()', function () {
    it('should expose the config.set method', function () {
      var config = require('../lib/config');
     
      assert.equal(readability.configure, config.set);
    });
  });

  describe('.xauth()', function () {
    it('should expose the auth.xauth method', function () {
      var auth = require('../lib/auth');
     
      assert.equal(readability.xauth, auth.xauth);
    });
  });

});