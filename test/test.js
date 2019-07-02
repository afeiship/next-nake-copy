var nx = require('next-js-core2');
var fs = require('fs');
var del = require('del');
require('../src/next-nake-copy');

describe('Basic test', () => {
  test('nx.nakeCopy', function() {
    del.sync('.tmp');
    nx.nakeCopy(['test/*.html'], './.tmp');
    var isExist = fs.existsSync('.tmp/test/test.html');
    expect(isExist).toBe(true);
  });
});
