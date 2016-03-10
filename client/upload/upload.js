Template.upload.helpers({
    filters: [

    ],
    uploaded_photo: function() {
        return Session.get("uploaded_photo_url");
    },
    uploaded_photo_effect: function() {
        return Session.get("uploaded_photo_effect");
    }
});

Template.upload.events({
    "click .upload-page__take-photo": function() {
        MeteorCamera.getPicture({ width: 800, height: 800 }, function(err, data) {
            if (err) console.log(err);

            Cloudinary._upload_file(data, {}, function(err, res) {
                if (err) console.log(err);

                Session.set("uploaded_photo_url", res.public_id);
            });

        });
    },

    "click .filter": function(event, template) {
        var filter = $(event.target).closest('.filter').data('filter');

        Session.set("uploaded_photo_effect", filter);
    },

    "change .upload-page__upload-photo": function(event, template) {
        var files = event.currentTarget.files;

        Cloudinary._upload_file(files[0], {
            folder: "secret"
        }, function(err, res) {
            console.log("Upload Error: " + err);

            Session.set("uploaded_photo_url", res.public_id);
        });
    },

    "click .upload-page__save": function(event) {
        var src = $(".upload-page__photo").attr("src");

        Meteor.call("addPost", src, "my selfie #selfie", function(error, result) {
            if (error) console.log("error", error);

            Router.go("profile");
        });
    }
});
