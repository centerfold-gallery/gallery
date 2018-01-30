module.exports = function(app) {
    var config = require('./../config');

    app.get('/art/CF000001', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recPxkmugLyHfDHZS', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
    app.get('/art/CF000002', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recAk2uMnyX2giz6q', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000003', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recIABB1rURsICGfk', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000004', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recHXfjbf9HYK1kIl', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000005', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recsZZsH4bFjaU2uw', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000006', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recOKUxTU0spAl33h', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000007', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec1ubCxRahi0qe4s', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000008', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recpSAmRsrojKBfou', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000009', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recvgHJtT9oPX3fF0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000010', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recuxRkgn63RXRuWJ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000011', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec7PlEmpO5n8lDVa', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000012', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recJjA4jb4LR7W9f8', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000013', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recbfvPMRFqPFYlby', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000014', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recGG8ThM0VAwzJhZ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000015', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recHRejMFGMjvD4gH', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000016', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recGtioZCKVK08RmG', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000017', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recbnLaPlLkj2hIhn', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000018', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recY0hbmdX6uSPdNJ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000019', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recey9gnbLsUqy6ne', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000020', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recaNW55YPzAHUBQ3', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000021', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec6Gv3ZsBAXV1dYt', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000022', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recmrzQoCAwjJ6SSd', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000023', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reccFNVm3uraKa2Yv', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000024', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reclA4UXuyYB5aP6k', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000025', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec0zutzfn3nCggtE', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000026', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recsQ9I7XO8Q0BTue', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000027', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recr7I0eNVibkR5v3', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000028', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recEm83PVbL7zpzTW', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000029', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reczrDWqK62tlYDc0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000030', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec5OlXkUKW3klADB', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000031', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recqeAF0i3DSeEtG1', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000032', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recBsqXnjsXfH5eyp', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000033', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recXecxUktEw6eyop', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000034', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recuEtDJlPEUUjOLy', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000035', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recq9OCFOMG33I40k', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000036', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recyZsxtV3IFMvYaU', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000037', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recHtIVUTGKIDS4yv', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000038', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recnGllYR7ZAwIYs8', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000039', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recqzmRPv63j3wirj', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000040', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recQElEz6aVTTRYnN', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000041', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recmsTwR97NGkF8sL', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000042', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recCvXeGFZdXP0ce0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000043', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec2kFmYPq8Ol3Vug', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000044', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recXJk8bIWxPTok2F', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000045', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recpX0dtjPVqSB5Zs', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000046', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec33CTNfpuYY8Ib0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000047', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reccmJBRWLj1mkNSk', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000048', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recSjXMchowxQIH2P', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000049', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reciQOSI3wOgbJa72', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000050', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec7Z3v2HlPHL6iCD', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000051', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recFtjat25LKSvuIN', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000052', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recaI7VeL7BbrlUZO', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000053', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recbHBxj9Jv8sU6zf', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000054', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recwfZT2nWnNNBlhv', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000055', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recMl712kRN4HqoC4', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000056', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recXxOx0rYpi970k8', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000057', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('receQtH17sN5Iq16T', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000058', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recDnmJuWPrlwiQQ9', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000059', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec3tth1TH2k3LxML', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000060', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec4Yr9qlZSYSuT05', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000061', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec8S3uMLTdDlD2tK', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000062', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recesIR7x12pEttfv', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000063', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recETFmHVoUmsvdy1', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000064', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec8iuhtpAcIpMD7q', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000065', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recqNfDz6GGDKV4ll', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000066', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recmQOSHy8M3ayJCi', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000067', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recnIxhtY7KlhRdF9', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000068', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recrhcbIAVTH1ppzO', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000069', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recHH8v0u4exkRMR3', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000070', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recfwUqDIrVpHJmUf', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000071', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recr0sDCaqeEzmUQt', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000072', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recrIpxCHspmLgZE9', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000073', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recTM5Ct9pG91OyTX', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000074', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recLEUr7vt2AlicvB', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000075', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recRASE6hikqkJto0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000076', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recyCIVBkYT0OWELk', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000077', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reccj087pv8mL0q2l', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000078', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reck1GI2Tc3K64h7J', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000079', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recfKztPoTBd42QH2', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000080', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reciYiIHHQH7wJ8jN', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000081', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec8xhEsrEWJtrmgs', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000082', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reciy3KoRy6tse6BK', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000083', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjLI7LGRzp4gX1b', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000084', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recWWztuNB9ITUn5m', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000085', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recIKqFNJYBTpWxK0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000086', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reclyqvTufYQT1And', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000087', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reckQQw9WnMvno7KI', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000088', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjl4FsoFYXrNZr1', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000089', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec4FdMmD40qOJ2GB', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000090', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reczTFGQb3JU9t82X', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000091', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recqfrkL0MJ14EzJ6', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000092', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recTmPSDqZtqCpD2S', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000093', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recqpuGUtdQUmBYtw', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000094', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec0Im6ADh3zHVXng', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000095', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recUJ9TRbbv0BXPiv', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000096', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recfcYt3AI9WaJmdd', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000097', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recFvCEOh2lLJpJyz', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000098', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recn5P0fYn3hM6sKW', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000099', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reczaZxti1gx63jR9', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000100', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recZxX70avo7MgfmV', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000101', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recr67hTd3QEHwerZ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000102', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recvDkCGbq6lYVcPb', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000103', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reclM2y8Csn4cglM4', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000104', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recaE53yWxNPTPFag', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000105', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rectcvEcN452bXuf6', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000106', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recJmPfqnRlCWraqP', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000107', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recPzFc8RpwqOrBKh', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000108', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec0zcGXdTepp0Hn3', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000109', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reccBoKTdckqaEU4E', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000110', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recLpEdqA3OR0tPHq', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000111', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reckRHHxwhZaYQoOH', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000112', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recIJ3aawY6EHPylx', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000113', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recSuFCwlG1R8ghNQ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000114', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec1TGq3dGpG4U8pL', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000115', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recpTsCa0nlInhz1W', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000116', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec1gUp7oTLIdBaeJ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000117', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reciyZIbSXKILXlkT', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000118', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec0c3LqC550s6Bb3', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000119', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec3aI5i19BpdsVxF', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000120', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recgNpXL78oHRBIYO', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000121', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec4Ntg5syaXuWsRv', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000122', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reciHzKi98MrbcQO4', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000123', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec8ngvqolNSeLwWy', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000124', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recHVjnRBRpVfvKto', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000125', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recArTEDZ0jeuh41d', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000126', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recBXW2zSica1NkRd', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000127', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recFaV1LMTJbU62VK', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000128', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recsOj1IBaceqbUSx', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000129', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec7iWe9piZIegZSj', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000130', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recv4UGSzzVTPba4P', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000131', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reckdj4GwubBw0NFC', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000132', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recGrmSydYZvzFB19', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000133', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recsrLRPxYQShhdBw', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000134', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recN6eX8aKmdl52pf', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000135', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reczDgTEYleU6uNIE', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000136', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recF72OwOVTCoBr8H', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000137', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('receBl5fvIMON2UNa', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000138', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recnc4tshTUgICIzR', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000139', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec8G64GqJOtUfntJ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000140', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recKgHERZyEdNw7Z9', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000141', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recIj0LQbLYHyUMYk', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000142', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec95KwhPnpDXmSr9', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000143', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recV40FIaH319Ddui', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000144', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recim2DZnUmUYA41r', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000145', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recUUU8dsk2JIi90v', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000146', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recEpRqKz9WYQZHHf', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000147', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recDpsOoJnlyTincm', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000148', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec72C9gKh3qCPFrD', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000149', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recIJoSb59MFmV1Cd', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000150', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recSeKvLpNACzWvuj', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000151', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recPZQg9I7za2Al1X', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000152', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recv0A073i5xc4AXP', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000153', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec1v633O1C6cXOxe', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000154', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recRTVUPdziCQOqbQ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000155', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recBcUqNn9btklZfD', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000156', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recD35ApNcZGH0QkU', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000157', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recavYf2VaKlHxzMe', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000158', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recMZ88qPQqxpSMPY', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000159', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recYUo55FHcLlcBLO', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000160', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recCYM1nbdzGW81nw', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000161', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjJNm2DUXortFiN', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000162', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec3kTlB54o6LLlZQ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000163', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjqrCbDwf4ZDjLB', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000164', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recZyHCrn4k8dCeLl', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000165', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recW1kVtehOZc0vGP', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000166', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recRZ76TWIbrfoFBe', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000167', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec6NFZ8smVWoy492', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000168', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recQkn0AHjQcphnDZ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000169', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recOO1VBKSSQQca0K', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000170', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recNY8WrjKUOc8gsS', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000171', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recWmhqHnZVftp5ZV', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000172', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recNADB6mu0jZfQRD', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000173', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recKKLzbUpkh9q0kT', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000174', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recS16dfFlHaZqwYT', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000175', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recUczUTcPQu0O9dQ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000176', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reczSv0WdYxhqPEKo', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000177', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recAwg4VxGUJwa1K0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000178', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recqgnmV6hDCvuw9y', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000179', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recsMN62nth7khiWt', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000180', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recGPosmJwigKjW6K', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000181', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recx0Ie2jcFhRWgXg', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000182', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recyCPU7MELdACxP6', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000183', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rech2MF3pfMuR7Jp7', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000184', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recc0h8NnlemuaHwm', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000185', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recMryqNX5EdNtqiv', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000186', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recEjPpWLGnSOztUp', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000187', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec4tDWcjZ53iFarI', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000188', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recel7atYApkKCcnJ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000189', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recgvEo8e9TiMullP', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000190', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recqrW2vbYhkOAJTa', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000191', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('receFXN8slCBBojL0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000192', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recdlRfXOGstW8KRY', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000193', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recw3WWeMyJUXh84X', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000194', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reclLUC9iQ21MhZib', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000195', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recPPdbdtDqW4mPns', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000196', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recSymeLzNkBuyn0x', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000197', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recTCkFyEAITtLQl2', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000198', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recl79SQ0HAEa298c', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000199', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recMhtwNPnUtE8KbM', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000200', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recIi7eBuyDG85Ref', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000201', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recnRKVKNbZraLF3i', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000202', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recqMnD2AzrtJqyLs', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000203', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recbmzXdojD9Hddp1', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000204', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recYS5hM0LUOZULYw', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000205', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recRHLk7V3vIVjfCt', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000206', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjdYhP2CCENPfgY', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000207', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recXuDhmm7uyQwK15', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000208', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recARfUyNwR50J5VY', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000209', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rece7Ps0GkARYQRBe', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000210', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recvAoBdhiW4rnFz0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000211', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recCIghFYIdmE2aG9', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000212', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recVTokGaayDnQjiL', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000213', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recMoHPlCv2t8Imzd', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000214', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec2CLpoa1a7jsw3m', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000215', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec5YLzvHvrMD33cT', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000216', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recgGdMRh0nroFu3j', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000217', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec660sqoBRmehlq1', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000218', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recoe5wZkzpJPUlZo', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000219', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recW0kuv9MdsBTHbC', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000221', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjHKqPLUUAejecm', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000222', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recHiaflF2xkih8tZ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000223', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recu0I1hjoXds8jnT', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000224', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec784my7x4tmvFOM', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000225', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recgI80G1XCtMqQz3', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000226', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recmyFoReNes6918k', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000227', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recQkwEd8mq2Yysmj', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000228', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recznpuBNaaFlTJW2', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000229', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recun4GAqIJiZnH4K', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000230', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recaPrPTwXoSTuWGn', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000231', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recVoqIKYjl64Gbbj', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000232', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recWIydyxq1jM2W2M', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000233', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec5i1oc35g0pWPjb', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000234', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recUm6vq6uiUw0bbN', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000235', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recrqr2NwRw45xZBf', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000236', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recShLfQtzqGAqDcp', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000237', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recCsl4YQgJOmdZ7a', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000238', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recZ5isF56i6CaVGy', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000239', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reca8INCepYnnCWvA', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000240', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recKQCsPUE4FIUtcn', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000241', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recuQ3mUpZTAoWR1l', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000242', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recc50TmUNAS6kK1A', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000243', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recnyI69AyX9ML7o0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000244', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reciXMK47f6YK2xmq', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000245', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec0QnHWcmE9eCIax', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000246', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec23Ca2rm5svxSUM', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000247', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec7uJVYLaZiHK4UA', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000248', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recDmZ7hXg2xikgOp', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000249', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recZedQ7bs9OQE5ar', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000250', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec2zuNqPgvoD8S2R', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000252', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recinoxNQGxQCOxDL', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000253', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recVnGnc6S6GcOmjU', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000254', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recCwTPaFdRldsy56', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000255', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recSkDtV12zKM7XRy', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000256', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjJhDT9Fp3k73Dk', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000257', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recPvBbYiHuzwKnoF', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000258', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recMzIAkcFFqo8gCo', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000259', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recZ6z6X02W1ZN4Mj', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000260', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recV2LRAfGxqqLklH', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000261', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recXFPs4DxLOh0n2U', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000263', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recTRwcXP3L17paF3', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000264', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recaYhVeMIVBoRhZY', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000265', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recUkjimb72ZIhTKl', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000266', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recpWP8InPF3wwTWK', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000267', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec18FWFUT2bzKwcx', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000268', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recFqMHjxTc9xdJhV', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000269', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recj095QWD7rL8TSk', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000270', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recmj7JPquUFDfmhp', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000271', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recTFGwk7PxexcuKn', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000274', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recyHZQaygOxyYMHh', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000276', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec1chN7cjmKRXpFX', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000277', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recrPIiXShM1siXfJ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000278', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recuZNQ66Iuw7Aac0', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000280', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recwUv9P7FL9kzXcj', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000284', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reco83tmDegxyz1hH', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000285', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reciyGro42jKmPWVO', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000286', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recPtFYzBN52mNVw9', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000287', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recVcDUK7aYjsM3C5', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000288', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recr6nvNWPX7rS1mJ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000289', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recSjL45NEFKm2Tev', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000290', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recp5R2KidMu3Cqmt', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000291', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec3k8k5nNVNlYmLA', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000292', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec7ig0Dt8XptbNEK', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000293', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recU9ndU7fTe9J3Jt', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000294', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recY2t50Mt11KyMp3', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000295', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reczbGjcg2UFuauyW', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000296', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recVRDRBNUNTlRbNQ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000297', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec3x7xAmg9T68W42', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000298', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec52y33NGGR0HSbw', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000299', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reccl1vYI7paE34aM', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000300', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recZEwHj4CgnqV38z', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000301', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recSsMPbs4NnTGtoQ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000302', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recN9g4YwS4awWUpb', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000303', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recxr0cg67outRhOv', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000304', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recVkQzSZUAlJ9HDq', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000305', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recyZemMgEaW2OyTW', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000306', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rechFSudgC3h2Cmzu', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000307', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recd5vIUrfkxbtCLr', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000309', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recZ6z7H0ITkS94X7', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000310', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recADqxhDT6kB74gr', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000311', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recy0GtTzou55daaZ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000323', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recLsbEOPbFJSAkfy', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000325', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recNf2xv4Uxe2bPrV', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000326', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recSWv20ZhqvojOuX', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000327', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recAWbYGdEjIhBhkM', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000332', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recnFhveyjRrNgB6v', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000333', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec3JKIRVKKPwz4XK', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000334', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reclNECc0IsuDIzcr', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000335', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recuQuHEkQSdDKMWk', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000338', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recx50j3EdXuSDNBd', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000339', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recCkkEMo5TIO4fbR', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000340', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recNDgw7W0TpKa6T3', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000341', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recT1kBAJ4kkTYQ2B', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000344', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reckqyJ7vUPFgDOfl', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000347', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec2LjGwoK9xzdAzN', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000348', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reco76XGU7V1UPZuu', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000349', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rech11srVDpHHGgqx', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000350', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec6GGSciE8jhFYsX', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000351', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recCWxNyOnwoiJG1M', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000352', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recRRBVaRYTDEr7C8', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000353', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recoVtT9NUHgZiYap', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000354', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recKkti4JI9wZMqBf', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000355', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recuKZ5F5QZHm6Dev', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000356', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recTjyDzOE4YVD1OJ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000357', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjxf8wEXvS3rubZ', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000358', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recWXGOGME0Gn1eYB', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000359', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recd9fVNAGRsJztjW', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000360', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec1yGyOdfFpCjZEg', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000361', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reczuKUngytfw7NUu', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000362', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recdKr9KbShwNemJ4', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000363', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec60fJ6UM0mzs4GY', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000364', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rechv200nN6D79Vad', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000365', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reclURScEpeA24k0n', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000366', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recBId18a2qyZY75a', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000367', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recqCssktc2IBP7pf', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000368', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recdNgtlcY1dm9DKd', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000369', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reclTqsCIaLtGoXb3', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000370', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recF1y0xY8CbsaEKX', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000371', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recFZ7KA9xukUIsOp', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000372', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recCUjVFlEvLyPByK', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000373', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recp3cRZGZ0Q0QqR4', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000374', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recWt5yGvaThCfwEi', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000375', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rechqdhVUuQh0U7CV', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000376', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rechJyiFw5aF1epvw', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000377', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec6s4zF9aEjhhabI', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000378', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recEIOamuQLhUj1ao', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000379', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recbDiRqWFKlPXVG9', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000380', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec6R4xzoA2mq2WsB', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000381', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recC8EXIIcNDZhJ2G', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000382', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec049KbnXmW1SJAz', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000383', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recRIPalyCXMXXpSF', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000384', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recIbeQokhjzvdTl6', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000385', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec1dEoQN9eNzwGmB', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000386', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recFQkiXouwheCb73', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000387', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recZCamAfw6LpK3B4', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000388', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recLlQglScomDujkq', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000389', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recyBVUlXVa301zew', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000390', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjseKganbrbpN2E', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000391', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recht6rAI8qqn9ZZq', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000392', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recelcsxtZ3p3w1EF', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000393', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recuOXPqacNCGnlh5', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000394', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recZH2H1PBOO4qGPm', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000395', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recGHvdcUIzHUMPBX', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000396', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recHAvoyuwzxlWSfY', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000397', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recsThaI7xvjkdIA8', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000398', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recRv36TEUz6tGD6t', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000399', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recsXQKdZXqcmqS0G', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000400', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec74T0pqB5oLK4iP', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000401', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recoG5Qqm8C6Qfvs7', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000402', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reco2JJoQnt86HadR', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000403', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjYSKWHDq2tBdGf', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000404', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recGO5QMmXPGZbXp1', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000405', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recrTIBtVynoggziq', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000406', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recwwwpdkgV8DJuZB', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000407', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recP84QKQt5smS7wc', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000408', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recjpyZLpdV0lkyfk', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000409', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recwJWL2aNWBUXZ2t', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000410', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recSEjz7TEHhnGSKw', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000411', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recgk5VnJJCjNghGv', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000412', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec0H8svaCQJ4DFcm', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000413', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recMlj6Vgp4dvZREM', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000414', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recvPfjuMTlsaJCTe', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000415', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec5mHhqMt2UWxHI6', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000416', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recX83K1n9LUwcdwb', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000417', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recpHDLAMUhVoNg9n', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000418', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recnIbJlYI1TKg61N', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000419', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recYlIVVkc2HyeIiB', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000420', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reczcbSKPYUKQCJ5m', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000421', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec3A2SlgsziSO1co', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000422', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recBqJjJu8MnzoyWR', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000424', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec6gn5H07bSfuOfB', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000425', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('reckkglbHMprO50eU', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000426', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recPEjP4k9jmvIcja', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000427', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('rec5EMcnD3y6iQuay', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
app.get('/art/CF000428', function (req, res) {

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

        base('Artworks').find('recGfZVR1nWJgmVbc', function(err, record) {
            if (err) {
                console.error(err); return;
            }
            //res.json(record);
            console.log(record);

            res.render(
                'art/buy/buy-page.html',
                record
            );
        });
    });
    app.get('/art/CF000429', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recuTDwN25I3Zhhbd', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
     });
     app.get('/art/CF000430', function (req, res) {

             var Airtable = require('airtable');
             var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
             var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

             base('Artworks').find('rec4q3clCf3X5MsNQ', function(err, record) {
                 if (err) {
                     console.error(err); return;
                 }
                 //res.json(record);
                 console.log(record);

                 res.render(
                     'art/buy/buy-page.html',
                     record
                 );
             });
      });
      app.get('/art/CF000431', function (req, res) {

              var Airtable = require('airtable');
              var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
              var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

              base('Artworks').find('rec26623Zt17FJduy', function(err, record) {
                  if (err) {
                      console.error(err); return;
                  }
                  //res.json(record);
                  console.log(record);

                  res.render(
                      'art/buy/buy-page.html',
                      record
                  );
              });
       });
       app.get('/art/CF000432', function (req, res) {

               var Airtable = require('airtable');
               var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
               var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

               base('Artworks').find('rec1uHhR40MrflmtK', function(err, record) {
                   if (err) {
                       console.error(err); return;
                   }
                   //res.json(record);
                   console.log(record);

                   res.render(
                       'art/buy/buy-page.html',
                       record
                   );
               });
        });
        app.get('/art/CF000433', function (req, res) {

                var Airtable = require('airtable');
                var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
                var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

                base('Artworks').find('recH7qCC7qn1zz1A4', function(err, record) {
                    if (err) {
                        console.error(err); return;
                    }
                    //res.json(record);
                    console.log(record);

                    res.render(
                        'art/buy/buy-page.html',
                        record
                    );
                });
         });
         app.get('/art/CF000434', function (req, res) {

                 var Airtable = require('airtable');
                 var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
                 var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

                 base('Artworks').find('recnVtdseoUA7hpsC', function(err, record) {
                     if (err) {
                         console.error(err); return;
                     }
                     //res.json(record);
                     console.log(record);

                     res.render(
                         'art/buy/buy-page.html',
                         record
                     );
                 });
          });
          app.get('/art/CF000435', function (req, res) {

                  var Airtable = require('airtable');
                  var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
                  var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

                  base('Artworks').find('recmnkpacD9dOXyaI', function(err, record) {
                      if (err) {
                          console.error(err); return;
                      }
                      //res.json(record);
                      console.log(record);

                      res.render(
                          'art/buy/buy-page.html',
                          record
                      );
                  });
           });
           app.get('/art/CF000436', function (req, res) {

                   var Airtable = require('airtable');
                   var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
                   var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

                   base('Artworks').find('recHyTHlvUT0hP4uB', function(err, record) {
                       if (err) {
                           console.error(err); return;
                       }
                       //res.json(record);
                       console.log(record);

                       res.render(
                           'art/buy/buy-page.html',
                           record
                       );
                   });
            });
            app.get('/art/CF000437', function (req, res) {

                    var Airtable = require('airtable');
                    var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
                    var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

                    base('Artworks').find('recGBK5Dq5cVjcoCT', function(err, record) {
                        if (err) {
                            console.error(err); return;
                        }
                        //res.json(record);
                        console.log(record);

                        res.render(
                            'art/buy/buy-page.html',
                            record
                        );
                    });
             });
             app.get('/art/CF000438', function (req, res) {

                     var Airtable = require('airtable');
                     var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
                     var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

                     base('Artworks').find('rec3tEVrDcMxthgY2', function(err, record) {
                         if (err) {
                             console.error(err); return;
                         }
                         //res.json(record);
                         console.log(record);

                         res.render(
                             'art/buy/buy-page.html',
                             record
                         );
                     });
              });
              app.get('/art/CF000439', function (req, res) {

                      var Airtable = require('airtable');
                      var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
                      var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

                      base('Artworks').find('recQO5z1m69Rn8xMx', function(err, record) {
                          if (err) {
                              console.error(err); return;
                          }
                          //res.json(record);
                          console.log(record);

                          res.render(
                              'art/buy/buy-page.html',
                              record
                          );
                      });
               });





}
