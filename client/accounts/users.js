Template.usersold.helpers({
  usersold(){return Meteor.users.find().fetch();},

})
