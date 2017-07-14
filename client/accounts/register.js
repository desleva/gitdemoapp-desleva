Template.register.events({
  "click #js-submit"(event,instance){
    alert("clicked on register button");
    event.preventDefault();

    var fullname = instance.$("#js-fullname").val();
    var email = instance.$("#js-email").val();
    var username = instance.$("#js-username").val();
    var ppp = instance.$("#ppp").val();
    var country = instance.$("#js-country").val();
    var languages = instance.$("#js-languages").val();
    var gender = instance.$("#js-gender").val();
    console.log("ppp="+ppp);
    var user = {
      email,password:ppp,
      profile:{fullname,username,country,languages},
    }
    console.log(JSON.stringify(user))
    Accounts.createUser(user);
    Router.go('main');

  }
})
