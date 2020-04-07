/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var port = process.env.PORT || 5000; 

var ns = require('node-static');
var http = require('http');
var file = new (ns.Server)();

var app = http.createServer(function(req, res){
    file.serve(req, res);
}).listen(port);

var io = require('socket.io').listen(app);

var k = 100;
var bucket = {};

io.sockets.on('connection', function(socket){
    
    bucket[socket.id] = socket;
    console.log('CONNECTION >> \n\t', socket.id);
    
    socket.on('Reqlist', function(){ // client requets the k-bucket
	console.log('LIST >> \n\t', socket.id);
	socket.emit('Reslist', Object.keys(bucket));
    });
    
    socket.on('ReqJoin', function(target, rmi, args){ // client send message to another
	console.log('JOIN >> \n\t', socket.id + ' -> ' + target +' -> '+ rmi);
	bucket[target].emit('ResJoin', {rmi: rmi, args: args});
    });
    // stabilize peers, status, using k-bucket protocol
    
    socket.on('disconnect', function(){
	console.log('DISCONNECT >> \n\t', socket.id);
	delete bucket[socket.id];
    });
    
    setInterval(function(){
	console.log('KEEP-ALIVE >>');
	for(var key in bucket){
	    if(!bucket[key].connected)
		delete bucket[key];
	}
    }, 60000);
});

// leave the server as simple as possible, handle the logic at client side

// TODO, clustering, self replication
