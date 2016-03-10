Cloudinary.config({
    cloud_name: 'instagram-cloud',
    api_key: '947262681347232',
    api_secret: 'gh9ECWeM1uc49Tw2P4XFghnAVyE'
});

Cloudinary.rules.delete = function() {
    console.log(this.userId);
    return true;
};
