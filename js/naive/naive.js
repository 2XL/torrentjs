/*
 * Kademlia: A Peer to Peer Information System Based on The XOR Metric
 * 
 *  DHT
 *  Constraints:
 *	Any particular node can disappear at any time
 *	Nodes should be loaded equally (bandwidth and storage)
 *  Goal:
 *	Quick Storage and Retrieval, Independent from node failures
 *	Minimize the number of control messages
 */

// all the demonstration will be done on chrome



// singleton function
var kad = new (function () {
    console.log('kad');

    var node = function (hash) {
	console.log('node');
	this.isReady = false;
	this.hash = hash; // = (new Date).getTime(); 
	this.neighbors = {};	// already stablished connection 'hashes'
	this.addNeighbor = function (hash) {

	};
	this.connections = {};
	this.addConnection = function (hash) { // datachannels
	    // stablish connection, SDP
	    // ICE
	    // return channel
	};
	this.stabilizations = {}; // timers
	this.stabilization = function (action, check) {

	    // start, check
	};
    };

    var bootstrap = new function(){
	this.isReady = false;
    }(); // singleton bootstrap transaction

    var idSet = 4;
    var idSize = [16, 32, 64, 128, 160, 224, 256, 384, 512];
    // create a node which is self
    this.peer = new node(CryptoJS.SHA3(getNavigatorFingerprint(true), {outputLength: idSize[idSet]}).toString());
    this.routingTable = {};
    this.routingZone = {};
    this.kBucket = {}; // access by key value {key: name, value: priority}
    // 0 most recent , +Inf oldest
    this.distance = function (src, tgt) {
	return src.hash ^ tgt.hash;
	//
	// (parseInt('0010', 2) ^ parseInt('01000000', 2)).toString(2)
    };


    // this is the only central part but this part can be volatile and hightly scalable
    this.bootstrap = function (url) {
	// domain of the bootstrap server
	url = (url === undefined) ? "http://immense-dawn-3659.herokuapp.com/" : url;
	if (document.location.hostname === "localhost") {
	    url = "http://localhost:5000";
	}
	var socket = io.connect(url);
    };

    // class node


})();


var itvStart = setInterval(function () {
    if (kad.peer.hash === undefined) {
	console.log("self-start...");
    } else {
	console.log("self-started!");
	console.log(kad.peer.hash);
	kad.bootstrap();
	clearInterval(itvStart);
    }
}, 1000);

 