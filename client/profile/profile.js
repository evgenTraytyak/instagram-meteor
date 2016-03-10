Template.profile.helpers({
    name:() => Meteor.user().profile.name,

    avatar:() => Meteor.user().profile.photo,

    publications_count:() => Posts.find({ author: Meteor.userId() }).count(),

    posts:() => Posts.find({ author: Meteor.userId() }).fetch()
});
