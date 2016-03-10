Template.posts.helpers({
    posts: function() {
        return Posts.find({ author: Meteor.userId() }, { sort: { createdAt: -1 } }).fetch();
    }
});
