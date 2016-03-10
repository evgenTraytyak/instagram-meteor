Schemas.Comments = new SimpleSchema({
    author: {
        type: String
    },
    photoId: {
        type: String
    },
    text: {
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

Comments = Collections.Comments = new Mongo.Collection("comments");

Comments.attachSchema(Schemas.Comments);
