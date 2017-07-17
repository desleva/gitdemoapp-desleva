Template.findapenpal.onCreated(function(){
  this.country = new ReactiveVar('all');
})

Template.findapenpal.helpers({
  penpals(){
     var instance = Template.instance();
     var country = instance.country.get();
     console.log("country = "+country);
     var pals;
     if (country == "all")
       pals =Profiles.find({},{sort:{place:1,uname:1}});
     else
       pals = Profiles.find(
                  {place:country},
                  {sort:{uname:1}});
     console.dir(pals.fetch());
     return pals;
  }
})

Template.findapenpal.events({
  "change #js-country"(event, instance){
    console.log("changed! ");
    console.log(event.target.value);
    instance.country.set(event.target.value);
  }
})
