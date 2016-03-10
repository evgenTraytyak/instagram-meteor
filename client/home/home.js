Template.home.events({
    'click .login': function (event, template) {
        Meteor.loginWithFacebook({ requestPermissions: ['email', 'public_profile'] }, (error) => {
            Meteor.error(error);
        });
    }
});
