var assert = require('assert');
var 演示 = require("../入口")

describe('取字', function() {
  describe('', function() {
    it('有', function() {
      assert.equal(演示.取码("人"), "wwww");
    });
    it('无', function() {
      assert.equal(演示.取码("2"), null);
    });
  });
});
