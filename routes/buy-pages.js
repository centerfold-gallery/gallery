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
            // res.json(record);
            console.log(record);

            res.render(
                'art/buy/CF000001.html',
                record
            );
        });

        // var object_to_render = {key: "value", ...};
        //
        // fs.readFile(path_to_mustache_template, function (err, data) {
        //     if (err) throw err;
        //     var output = Mustache.render(data.toString(), object_to_render);
        //
        //   // do something with output...
        // });


        // var getOneArtwork = new Promise(function(resolve, reject) {
        //     base('Artworks')
        //         .find('recnGllYR7ZAwIYs8', function(err, OneArtworks) {
        //             if(err) {
        //                 reject(err)
        //             }
        //             else {
        //                 var jsonOneArtworks = OneArtworks.map(function(OneArtwork){
        //                     return OneArtwork['fields']
        //                 });
        //                 resolve(jsonOneArtworks);
        //                 console.log(record);
        //             }
        //     });
        // });
        //
        // getOneArtwork.then(function (result){
        //     context['OneArtworks'] = result;
        //     res.render(
        //         'art/buy/CF000001.html',
        //         {title: "Art 1", static_url: "https://s3.amazonaws.com/centerfold-website/"},
        //         context
        //     );
        // });
    });

}
