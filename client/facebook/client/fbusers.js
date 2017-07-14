
Template.friends.helpers({
  users(){return Profiles.find();},
})
Template.fbperson.helpers({
  isFriend(){return Friends.findOne({friend:this.u.owner,owner:Meteor.userId()})}
})

Template.fbperson.events({
  "click #js-friend"(event, instance){
    Friends.insert({friend:this.u.owner,owner:Meteor.userId()})
  },
  "click #js-defriend"(event,instance){
    var z = Friends.findOne({friend:this.u.owner,owner:Meteor.userId()});
    console.log('removing'); console.dir(z);
    Friends.remove(z._id);
  },

})
