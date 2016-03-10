Meteor.methods({
    addComment(photoId, text) {
        check(text, String);
        check(photoId, String);

        Comments.insert({ author: this.userId, text: text, photoId: photoId });
    }
});
