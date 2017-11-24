module.exports = function(app) {
    var config = require('./../config');

    app.get('/art/CF000101', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/"};

        base('Artworks').find('recr67hTd3QEHwerZ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/CF000101.html',
                record
            );
        });
    });

}
