Interuptors = new Mongo.Collection("interuptors");

Template.body.helpers({
  interuptors: function  () {
    return Interuptors.find({});
  }
});

Template.interuptor.events({
  'click .btn-red': function() {
    document.getElementById(this._id).className = "btn-green";
    Interuptors.update(this._id, { $set: {isOn: "True"}});
    Meteor.call('switchOn', this.onSignalCode);
  },
  'click .btn-green': function() {
    document.getElementById(this._id).className = "btn-red";
    Interuptors.update(this._id, { $set: {isOn: "False"}});
    Meteor.call('switchOff', this.offSignalCode);
  }
});