module.exports = function(app) {

    app.get('/art/CF000001', function (req, res) {

        // base('Artworks')
        //     .find('recnGllYR7ZAwIYs8', function(err, record) {
        //     if(err) {
        //         console.error(err); return;
        //     }
        //     else {
        //         var jsonHomepageArt = homepageArt.map(function(homepageArt){
        //             return homepageArt['_rawJson']
        //         });
        //         resolve(jsonHomepageArt[0]['fields']['Artworks']);
        //     }
        // });

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyy1OWD9fbKh3xIL'}).base('appAxg6rhUJ9BZmV4');

        base('Artworks').find('recnGllYR7ZAwIYs8', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            console.log(record);
        });

        res.render('art/buy/CF000001.html', {title: "Art 1", static_url: "https://s3.amazonaws.com/centerfold-website/"});
    });

}
