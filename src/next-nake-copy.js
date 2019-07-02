(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var globby = require('globby');
  var fs = require('fs');
  var path = require('path');

  // @ref: https://github.com/chrislearn/globs-copy/blob/master/index.js
  nx.nakeCopy = function(inPatterns, inDest, inOptions) {
    var files = globby.sync(inPatterns, inOptions);
    // ensure
    files.forEach(function(file) {
      var dest = path.join(inDest, '/', file);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(file, dest);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nakeCopy;
  }
})();
