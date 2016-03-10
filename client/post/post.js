Template.post.helpers({
    author_name() {
        return this.author;
    },

    comments() {
        return Comments.find({ photoId: this._id }).fetch();
    }
});

Template.post.events({
    "keyup .post__add-comment-field": function(event) {
        if (event.keyCode == 13) {
            Meteor.call("addComment", this._id, event.target.value, function(error, result){
                if (error) console.log("error", error);
            });
        }
    }
});


Template.postComment.helpers({
    authorName: function() {
        return Meteor.users.findOne({ _id: this.author }).profile.name;
    }
});
