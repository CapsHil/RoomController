Interuptors = new Mongo.Collection("interuptors");

Meteor.startup(function() {
	spawn = Npm.require('child_process').spawn;
	
});

Meteor.methods({
	switchOn: function(signalCode) {
		console.log("On signal sent at " + signalCode);
		// var connection = new WebSocket('ws://192.168.1.26:9632');

	 //    connection.onopen = function () {
	 //        connection.send('switchOn_4');
	 //    };
	 	var createClient() = Meteor.npmRequire('flow-tcp-client');
	 	var client = createClient();
	 	client.host('192.168.1.26');
	 	client.port(9632);
	 	client.connect();
	 	client.write("test");
	 	clent.end();

	},
	switchOff: function(signalCode) {
		// Send signal
		console.log("Off signal sent at " + signalCode);
		var connection = new WebSocket('ws://192.168.1.26:9632');

	    connection.onopen = function () {
	        connection.send('switchOff_4');
	    };
	}
});