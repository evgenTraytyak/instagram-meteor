Meteor.methods({
    addPost(src, description) {
        check(src, String);
        check(description, String);

        Posts.insert({ author: this.userId, photo: src });
    }
});
