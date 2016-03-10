Meteor.startup(() => {
    // Add Facebook configuration entry
    ServiceConfiguration.configurations.update(
        { "service": "facebook" },
        {
            $set: {
                "appId": "111567345868239",
                "secret": "741d9cc16c0f2462493a453a0a3cbc56"
            }
        },
        { upsert: true }
    )
});

Accounts.onCreateUser((options, user) => {
    user.profile = options.profile;

    if (user.services.facebook) {
        user.profile.photo = "https://graph.facebook.com/" + user.services.facebook.id + "/picture?width=320&height=320";
    }

    return user;
});
