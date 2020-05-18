var assert = require('assert');
var 演示 = require("../入口")

describe('取字', function() {
  describe('', function() {
    it('86牺', function() {
      assert.equal(演示.取码("牺", 86), "trsg");
    });
    it('98牺', function() {
      assert.equal(演示.取码("牺"), "csg");
    });
    it('无', function() {
      assert.equal(演示.取码("2", 86), null);
    });
  });
});
