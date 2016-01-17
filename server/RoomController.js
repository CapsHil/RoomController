Interuptors = new Mongo.Collection("interuptors");

Meteor.startup(function() {
	spawn = Npm.require('child_process').spawn;
});

Meteor.methods({
	switchOn: function(signalCode) {
		spawn('./codesend', [signalCode]);
		console.log("On signal sent at " + signalCode);
	},
	switchOff: function(signalCode) {
		// Send signal
		console.log("Off signal sent at " + signalCode);
	}
});