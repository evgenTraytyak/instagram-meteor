Router.configure({
    layoutTemplate: 'layout'
});

Router.route("/", {
    name: "home",
    action: function() {
        if (Meteor.userId()) {
            this.render('posts');
        } else {
            this.render('home');
        }
    },
    waitOn:function(){
        if (Meteor.userId()) {
            Meteor.subscribe("posts");
        }
    }
});

Router.route('/user/:id', function() {
  this.render('userPage');
});

Router.route("/profile", {
    name: "profile",
    template: "profile",
    waitOn: function() {
        Meteor.subscribe("profile_posts");
    },
    data: function() {
        return Meteor.userId()
    }
});

Router.route("/upload", {
    name:"upload",
    template:"upload",
    layoutTemplate: ""
});
