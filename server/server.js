var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var url = require('url');

function start(route, handle){

    app.use(express.static('public'));
    app.get('/', function(req, res){

        res.sendFile(__rootdir + '/server/index.html');
    });

    app.get('/*',function(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, res);
    });

    http.listen(process.env.PORT || 2017, function(){
    console.log('listening on *:2017');
    });
}
exports.start = start