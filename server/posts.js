Meteor.publishComposite("posts", {
    find: function() {
        return Posts.find({ author: this.userId });
    },
    children: [
        {
            find: function(doc) {
                return Comments.find({ photoId: doc._id });
            },
            children: [
                {
                    find: function(doc) {
                        Meteor.users.find({ _id: doc.author }, { fields: { profile: 1 }});
                    }
                }
            ]
        }
    ]
});
