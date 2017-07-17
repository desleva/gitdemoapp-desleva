Template.login.events({
  "click #js-submit"(event, instance){
    event.preventDefault();
    console.log("clicked on login button");
    var username=instance.$("#js-uname").val();
    var password=instance.$("#js-psw").val();
    console.log(username+" "+password);
    Meteor.loginWithPassword(username,password,
    function(error){
      if (error) {alert("Login Failed.. You must register first")}
    });
    Router.go('main');
  }
})
