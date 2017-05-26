__rootdir = __dirname;

var server = require('./server/server.js');
var router = require('./server/router.js');
var requestHandler = require('./server/requestHandlers.js');

var handle = {};
var prodMode = false;
handle['/'] = requestHandler.start;
handle['/color-convertor'] = requestHandler.colorConvertor;
handle['/binary-convertor'] = requestHandler.binaryConvertor;

server.start(router.route, handle);
