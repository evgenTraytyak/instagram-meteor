Schemas.Posts = new SimpleSchema({
    author: {
        type: String
    },
    photo: {
        type: String
    },
    createdAt: {
        type: Date,
        denyUpdate: true,
        autoValue() {
            if (this.isInsert) {
                return new Date();
            }
        }
    }
});

Posts = Collections.Posts = new Mongo.Collection("posts");

Posts.attachSchema(Schemas.Posts);
