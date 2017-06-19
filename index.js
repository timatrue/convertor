__rootdir = __dirname;

var server = require('./server/server.js');
var router = require('./server/router.js');
var requestHandler = require('./server/requestHandlers.js');

var handle = {};
var prodMode = false;
handle['/'] = requestHandler.start;
handle['/ext-hex-rgb-convertor'] = requestHandler.colorConvertor;
handle['/binary-convertor'] = requestHandler.binaryConvertor;
handle['/color-convertors'] = requestHandler.colorConvertors;

server.start(router.route, handle);
