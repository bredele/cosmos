
/**
 * Dependencies
 */

var request = require('superagent');


function parse(res, cb) {
  res.setEncoding('binary');
  res.data = '';
  res.on('data', function (chunk) {
    res.data += chunk;
  });
  res.on('end', function () {
    cb(null, new Buffer(res.data, 'binary'));
  });
}

/**
 * Expose 'request'
 */

module.exports.request = function(repo, name) {
  //NOTE:we could set branch with @
  var url = '/' + repo + '/' + name + '/zip/master';
  request
    .get('https://codeload.github.com' + url)
    .parse(parse)
    .end(function(res) {
      //if (err) return err;
      console.log(Buffer.isBuffer(res.body));
      //Buffer.isBuffer(res.body)
      console.log(res.body);
    });
};
