Meteor.publish("profile_posts", function() {
    return Posts.find({ author: this.userId });
});
