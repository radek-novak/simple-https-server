var https = require('https');
var fs = require('fs');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic("./");

var CERT_DIR = './cert/'

var options = {
  key: fs.readFileSync(CERT_DIR + 'key.pem'),
  cert: fs.readFileSync(CERT_DIR + 'cert.pem')
};

var a = https.createServer(options, function (req, res) {

  var done = finalhandler(req, res);
  serve(req, res, done);
}).listen(8000);