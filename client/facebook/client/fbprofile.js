

Template.fbprofile.helpers({
  user(){
    var theProfile = Profiles.findOne({owner:Meteor.userId()});
    if (!theProfile){
      var k = Profiles.find().count();
      Profiles.insert({name:"anonymous"+k,program:'other',owner:Meteor.userId()});
      theProfile = Profiles.findOne({owner:Meteor.userId()});
    }
    return theProfile;

   },




})






Template.fbinfo.events({
  "click #js-submit"(event,instance){
    event.preventDefault();
    uname = instance.$('#js-uname').val();
    url = instance.$('#js-url').val();
    place = instance.$('#js-location').val();
    language = instance.$('#js-language').val();
    hobbies = instance.$('#js-hobbies').val();
    bio = instance.$('#js-bio').val();
    program = instance.$('#js-program').val();
    console.log('just read '+name);
    this.user.uname = uname;
    this.user.url = url;
    this.user.place = place;
    this.user.language = language;
    this.user.hobbies = hobbies;
    this.user.bio = bio;
    this.user.program = program;
    console.dir(this.user)
    var zz = Profiles.update(this.user._id,this.user);
    //Router.go('/fbuser/'+this.user._id);

  }
})
