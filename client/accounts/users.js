Template.users.helpers({
  users(){return Meteor.users.find().fetch();},
  
})
