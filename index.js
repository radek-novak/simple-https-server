#! /usr/bin/env node

var https = require('https');
var fs = require('fs');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic("./");
var child_process = require('child_process');


var nodeRootFolder = child_process.execSync(`npm root -g`)
var certFolder = nodeRootFolder.toString().trim() + '/simple-https-server/cert/'


var options = {
  key: fs.readFileSync(certFolder + 'key.pem'),
  cert: fs.readFileSync(certFolder + 'cert.pem')
};

console.log('Starting server on HTTPS://localhost:8000...')

var httpsServer = https.createServer(options, function (req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
}).listen(8000);
