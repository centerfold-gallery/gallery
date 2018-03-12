module.exports = function(app) {
    var config = require('./../config');

    app.get('/artCF000001', function (req, res) {

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
    app.get('/artCF000002', function (req, res) {

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
    app.get('/artCF000003', function (req, res) {

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
    app.get('/artCF000004', function (req, res) {

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
    app.get('/artCF000005', function (req, res) {

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
    app.get('/artCF000006', function (req, res) {

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
    app.get('/artCF000007', function (req, res) {

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
    app.get('/artCF000008', function (req, res) {

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
    app.get('/artCF000009', function (req, res) {

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
    app.get('/artCF000010', function (req, res) {

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
    app.get('/artCF000011', function (req, res) {

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
    app.get('/artCF000012', function (req, res) {

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
    app.get('/artCF000013', function (req, res) {

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
    app.get('/artCF000014', function (req, res) {

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
    app.get('/artCF000015', function (req, res) {

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
    app.get('/artCF000016', function (req, res) {

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
    app.get('/artCF000017', function (req, res) {

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
    app.get('/artCF000018', function (req, res) {

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
    app.get('/artCF000019', function (req, res) {

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
    app.get('/artCF000020', function (req, res) {

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
    app.get('/artCF000021', function (req, res) {

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
    app.get('/artCF000022', function (req, res) {

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
    app.get('/artCF000023', function (req, res) {

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
    app.get('/artCF000024', function (req, res) {

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
    app.get('/artCF000025', function (req, res) {

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
    app.get('/artCF000026', function (req, res) {

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
    app.get('/artCF000027', function (req, res) {

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
    app.get('/artCF000028', function (req, res) {

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
    app.get('/artCF000029', function (req, res) {

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
    app.get('/artCF000030', function (req, res) {

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
    app.get('/artCF000031', function (req, res) {

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
    app.get('/artCF000032', function (req, res) {

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
    app.get('/artCF000033', function (req, res) {

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
    app.get('/artCF000034', function (req, res) {

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
    app.get('/artCF000035', function (req, res) {

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
    app.get('/artCF000036', function (req, res) {

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
    app.get('/artCF000037', function (req, res) {

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
    app.get('/artCF000038', function (req, res) {

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
    app.get('/artCF000039', function (req, res) {

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
    app.get('/artCF000040', function (req, res) {

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
    app.get('/artCF000041', function (req, res) {

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
    app.get('/artCF000042', function (req, res) {

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
    app.get('/artCF000043', function (req, res) {

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
    app.get('/artCF000044', function (req, res) {

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
    app.get('/artCF000045', function (req, res) {

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
    app.get('/artCF000046', function (req, res) {

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
    app.get('/artCF000047', function (req, res) {

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
    app.get('/artCF000048', function (req, res) {

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
    app.get('/artCF000049', function (req, res) {

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
    app.get('/artCF000050', function (req, res) {

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
    app.get('/artCF000051', function (req, res) {

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
    app.get('/artCF000052', function (req, res) {

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
    app.get('/artCF000053', function (req, res) {

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
    app.get('/artCF000054', function (req, res) {

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
    app.get('/artCF000055', function (req, res) {

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
    app.get('/artCF000056', function (req, res) {

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
    app.get('/artCF000057', function (req, res) {

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
    app.get('/artCF000058', function (req, res) {

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
    app.get('/artCF000059', function (req, res) {

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
    app.get('/artCF000060', function (req, res) {

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
    app.get('/artCF000061', function (req, res) {

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
    app.get('/artCF000062', function (req, res) {

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
    app.get('/artCF000069', function (req, res) {

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
    app.get('/artCF000070', function (req, res) {

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
    app.get('/artCF000071', function (req, res) {

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
    app.get('/artCF000072', function (req, res) {

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
    app.get('/artCF000073', function (req, res) {

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
    app.get('/artCF000074', function (req, res) {

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
    app.get('/artCF000075', function (req, res) {

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
    app.get('/artCF000076', function (req, res) {

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
    app.get('/artCF000077', function (req, res) {

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
    app.get('/artCF000078', function (req, res) {

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
    app.get('/artCF000079', function (req, res) {

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
    app.get('/artCF000080', function (req, res) {

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
    app.get('/artCF000081', function (req, res) {

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
    app.get('/artCF000082', function (req, res) {

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
    app.get('/artCF000083', function (req, res) {

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
    app.get('/artCF000084', function (req, res) {

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
    app.get('/artCF000085', function (req, res) {

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
    app.get('/artCF000086', function (req, res) {

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
    app.get('/artCF000087', function (req, res) {

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
    app.get('/artCF000088', function (req, res) {

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
    app.get('/artCF000089', function (req, res) {

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
    app.get('/artCF000090', function (req, res) {

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
    app.get('/artCF000091', function (req, res) {

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
    app.get('/artCF000092', function (req, res) {

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
    app.get('/artCF000093', function (req, res) {

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
    app.get('/artCF000094', function (req, res) {

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
    app.get('/artCF000095', function (req, res) {

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
    app.get('/artCF000096', function (req, res) {

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
    app.get('/artCF000097', function (req, res) {

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
    app.get('/artCF000098', function (req, res) {

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
    app.get('/artCF000099', function (req, res) {

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
    app.get('/artCF000119', function (req, res) {

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
    app.get('/artCF000122', function (req, res) {

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
    app.get('/artCF000123', function (req, res) {

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
    app.get('/artCF000124', function (req, res) {

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
    app.get('/artCF000125', function (req, res) {

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
    app.get('/artCF000126', function (req, res) {

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
    app.get('/artCF000127', function (req, res) {

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
    app.get('/artCF000128', function (req, res) {

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
    app.get('/artCF000129', function (req, res) {

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
    app.get('/artCF000130', function (req, res) {

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
    app.get('/artCF000131', function (req, res) {

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
    app.get('/artCF000132', function (req, res) {

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
    app.get('/artCF000133', function (req, res) {

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
    app.get('/artCF000134', function (req, res) {

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
    app.get('/artCF000135', function (req, res) {

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
    app.get('/artCF000136', function (req, res) {

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
    app.get('/artCF000137', function (req, res) {

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
    app.get('/artCF000138', function (req, res) {

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
    app.get('/artCF000139', function (req, res) {

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
    app.get('/artCF000140', function (req, res) {

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
    app.get('/artCF000141', function (req, res) {

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
    app.get('/artCF000144', function (req, res) {

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
    app.get('/artCF000145', function (req, res) {

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
    app.get('/artCF000146', function (req, res) {

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
    app.get('/artCF000147', function (req, res) {

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
    app.get('/artCF000148', function (req, res) {

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
    app.get('/artCF000149', function (req, res) {

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
    app.get('/artCF000150', function (req, res) {

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
    app.get('/artCF000151', function (req, res) {

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
    app.get('/artCF000152', function (req, res) {

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
    app.get('/artCF000153', function (req, res) {

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
    app.get('/artCF000160', function (req, res) {

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
    app.get('/artCF000161', function (req, res) {

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
    app.get('/artCF000172', function (req, res) {

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
    app.get('/artCF000173', function (req, res) {

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
    app.get('/artCF000174', function (req, res) {

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
    app.get('/artCF000175', function (req, res) {

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
    app.get('/artCF000176', function (req, res) {

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
    app.get('/artCF000177', function (req, res) {

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
    app.get('/artCF000185', function (req, res) {

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
    app.get('/artCF000186', function (req, res) {

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
    app.get('/artCF000187', function (req, res) {

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
    app.get('/artCF000188', function (req, res) {

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
    app.get('/artCF000189', function (req, res) {

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
    app.get('/artCF000190', function (req, res) {

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
    app.get('/artCF000191', function (req, res) {

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
    app.get('/artCF000192', function (req, res) {

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
    app.get('/artCF000200', function (req, res) {

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
    app.get('/artCF000201', function (req, res) {

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
    app.get('/artCF000202', function (req, res) {

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
    app.get('/artCF000213', function (req, res) {

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
    app.get('/artCF000214', function (req, res) {

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
    app.get('/artCF000215', function (req, res) {

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
    app.get('/artCF000216', function (req, res) {

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
    app.get('/artCF000217', function (req, res) {

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
    app.get('/artCF000218', function (req, res) {

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
    app.get('/artCF000219', function (req, res) {

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
    app.get('/artCF000252', function (req, res) {

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
    app.get('/artCF000253', function (req, res) {

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
    app.get('/artCF000254', function (req, res) {

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
    app.get('/artCF000255', function (req, res) {

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
    app.get('/artCF000256', function (req, res) {

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
    app.get('/artCF000257', function (req, res) {

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
    app.get('/artCF000258', function (req, res) {

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
    app.get('/artCF000259', function (req, res) {

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
    app.get('/artCF000260', function (req, res) {

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
    app.get('/artCF000261', function (req, res) {

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
    app.get('/artCF000263', function (req, res) {

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
    app.get('/artCF000264', function (req, res) {

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
    app.get('/artCF000265', function (req, res) {

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
    app.get('/artCF000274', function (req, res) {

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
    app.get('/artCF000309', function (req, res) {

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
    app.get('/artCF000310', function (req, res) {

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
    app.get('/artCF000311', function (req, res) {

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
    app.get('/artCF000323', function (req, res) {

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
    app.get('/artCF000325', function (req, res) {

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
    app.get('/artCF000326', function (req, res) {

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
    app.get('/artCF000327', function (req, res) {

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
    app.get('/artCF000338', function (req, res) {

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
    app.get('/artCF000339', function (req, res) {

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
    app.get('/artCF000340', function (req, res) {

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
    app.get('/artCF000341', function (req, res) {

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
    app.get('/artCF000350', function (req, res) {

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
    app.get('/artCF000351', function (req, res) {

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
    app.get('/artCF000352', function (req, res) {

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
    app.get('/artCF000353', function (req, res) {

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
    app.get('/artCF000354', function (req, res) {

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
    app.get('/artCF000355', function (req, res) {

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
    app.get('/artCF000356', function (req, res) {

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
    app.get('/artCF000357', function (req, res) {

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
    app.get('/artCF000358', function (req, res) {

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
    app.get('/artCF000359', function (req, res) {

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
    app.get('/artCF000360', function (req, res) {

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
    app.get('/artCF000361', function (req, res) {

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
    app.get('/artCF000362', function (req, res) {

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
    app.get('/artCF000363', function (req, res) {

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
    app.get('/artCF000364', function (req, res) {

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
    app.get('/artCF000365', function (req, res) {

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
    app.get('/artCF000366', function (req, res) {

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
    app.get('/artCF000367', function (req, res) {

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
    app.get('/artCF000368', function (req, res) {

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
    app.get('/artCF000369', function (req, res) {

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
    app.get('/artCF000370', function (req, res) {

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
    app.get('/artCF000371', function (req, res) {

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
    app.get('/artCF000372', function (req, res) {

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
    app.get('/artCF000373', function (req, res) {

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
    app.get('/artCF000374', function (req, res) {

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
    app.get('/artCF000375', function (req, res) {

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
    app.get('/artCF000379', function (req, res) {

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
    app.get('/artCF000383', function (req, res) {

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
    app.get('/artCF000384', function (req, res) {

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
    app.get('/artCF000385', function (req, res) {

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
    app.get('/artCF000392', function (req, res) {

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
    app.get('/artCF000393', function (req, res) {

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
    app.get('/artCF000394', function (req, res) {

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
    app.get('/artCF000395', function (req, res) {

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
    app.get('/artCF000396', function (req, res) {

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
    app.get('/artCF000397', function (req, res) {

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
    app.get('/artCF000398', function (req, res) {

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
    app.get('/artCF000399', function (req, res) {

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
    app.get('/artCF000400', function (req, res) {

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
    app.get('/artCF000401', function (req, res) {

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
    app.get('/artCF000402', function (req, res) {

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
    app.get('/artCF000403', function (req, res) {

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
    app.get('/artCF000404', function (req, res) {

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
    app.get('/artCF000405', function (req, res) {

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
    app.get('/artCF000406', function (req, res) {

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
    app.get('/artCF000407', function (req, res) {

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
    app.get('/artCF000408', function (req, res) {

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
    app.get('/artCF000409', function (req, res) {

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
    app.get('/artCF000410', function (req, res) {

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
    app.get('/artCF000411', function (req, res) {

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
    app.get('/artCF000412', function (req, res) {

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
    app.get('/artCF000413', function (req, res) {

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
    app.get('/artCF000414', function (req, res) {

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
    app.get('/artCF000415', function (req, res) {

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
    app.get('/artCF000416', function (req, res) {

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
    app.get('/artCF000417', function (req, res) {

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
    app.get('/artCF000418', function (req, res) {

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
    app.get('/artCF000419', function (req, res) {

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
    app.get('/artCF000420', function (req, res) {

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
    app.get('/artCF000421', function (req, res) {

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
    app.get('/artCF000422', function (req, res) {

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
    app.get('/artCF000423', function (req, res) {

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
    app.get('/artCF000424', function (req, res) {

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
    app.get('/artCF000425', function (req, res) {

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
    app.get('/artCF000426', function (req, res) {

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
    app.get('/artCF000427', function (req, res) {

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
    app.get('/artCF000428', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recaZcwe3xnPhEYCd', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000429', function (req, res) {

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
    app.get('/artCF000430', function (req, res) {

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
    app.get('/artCF000431', function (req, res) {

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
    app.get('/artCF000432', function (req, res) {

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
    app.get('/artCF000433', function (req, res) {

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
    app.get('/artCF000434', function (req, res) {

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
    app.get('/artCF000435', function (req, res) {

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
    app.get('/artCF000436', function (req, res) {

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
    app.get('/artCF000437', function (req, res) {

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
    app.get('/artCF000438', function (req, res) {

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
    app.get('/artCF000439', function (req, res) {

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
    app.get('/artCF000440', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recclEAyFlAXfvejI', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000441', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recF3f2Bl4bSWsXJk', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000442', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recUThMm7A4GvmBiy', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000443', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recdIc1aWiyZCQ727', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000444', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recIK2STrkAsMpr5J', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000445', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec0lxwzkd95SZ3wS', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000446', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec5ZwrjDseFOC3Ci', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000447', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recemYR2k4QJSeacx', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000448', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recyP7hxRwXvtZNr9', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000449', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec1qOVqmPf8W5kRE', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000450', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('reco4MHZ49hKbvK76', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000451', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recbIwK8NoYADO1Og', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000452', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recP2X6hthBO0vyrc', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000453', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recvAMXd0ovbqJTVi', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000454', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recjP2kSM3oGPuVyP', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000455', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recQHPugZioHEEflJ', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000456', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recxV7kO4QpdJ9kbv', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000457', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recLvzyRC0NfD2zDi', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000458', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec98ydE8004vYAmt', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000459', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recu9GI8fY6B5EjLs', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000460', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recXcQTchPm3RemCJ', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000461', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('reccTv8eCZxCZ5GXJ', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000462', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rech04Bmn1yqRfzR7', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000463', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recf3NxWPDWpgwKh4', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000464', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec5kPT7N3UKVwtYY', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000465', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recOX134lymJlYByx', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000466', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recfq5wl4S6KXgrry', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000467', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recI1XD2KyL71ClI0', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000468', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recWzkofl6LFalNIl', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000469', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recFKAO7BZw5KNBNK', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000470', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rechotIKUDGZIWywb', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000471', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec77nIiqRrGRCZRj', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000472', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recDqb6uV1q3frtcW', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000473', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recUicjMXSJkmOCL8', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000474', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recMLOalit8z10oV9', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000475', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recf8V444OI3zkt0v', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000476', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recDZYnG0hxJYIXW1', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000477', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec9QjFV9OErd5RYC', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000478', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recLEdofHiMzboJ5N', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000479', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec3KiHHavWeBOl7q', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000480', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recNoA64rvtX2uJxI', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000481', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recBchkiytfLbbnFI', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000482', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec8nIvpA5hXCmJct', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000483', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rectVfs3PW0Nm7ort', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000484', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recfJt2JEmRlSYwQz', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000485', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recqZKnj4Gz7PrV4b', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000486', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recH0no5NXaFVW3eK', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000487', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recrWsLl8PkKg1uEo', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000488', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recZ8WNji3x2CPNam', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000489', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec0fPwhq6KOpVpBP', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000490', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recxuVYjf62eEzt5t', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000491', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recwan0yRkRAhE6m2', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000492', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recKNbTbhWHca1rml', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000493', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec8CtVLgCBgudVA5', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000494', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('reciMhsrd6OgPrim2', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000495', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recjTf3uhEMMpddKK', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000496', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recknSYXs21WUfult', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000497', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recoqNV4WvSlU24GR', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000498', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recNnbqVjWbTSzVjy', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000499', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('reczOEBEmktLh83HD', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000500', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recXVK6lCl5JjfDqY', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000501', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recnPQBk2lEKRskmL', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000502', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recir0Sipp9WXzai0', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000503', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recscHLWaKc6lvFwj', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000504', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recUH15f1BAwpf31W', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000505', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recpwXo1Rhly4xy9H', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000506', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rechjvQhZm1tRC5Dw', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000507', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('receAE5WZ1Ao25egD', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000508', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recxC6YDb5jPdrLRI', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000509', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recWKtPTLbhvNZNkD', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000510', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recKC1Tm3maYXfEez', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000511', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recs3S9SyuNZh4rqU', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000512', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recPZFa6GiJLIqTzF', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000513', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec4nvVaYULaHNo4O', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000514', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recnjPD9Xxzl7Puqe', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000515', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recrI5jphDq6HaG8v', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000516', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recH9q7dq0zKRx7I7', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000517', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recfhXrH0bbOFlf4g', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000518', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recu2GoFixIwaVaLF', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000519', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recG2bGLTl6up7tM4', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000520', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recZGripovFmhlfnd', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000521', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('reco2EjaJ7jB7oZcE', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000522', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recnZi8UHMcoVW83j', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000523', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recpUGhE9sErrfzU6', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000524', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recMKFhxScs6zVhiI', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000525', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recUxcWY5z9xGvSUs', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000526', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec2ERu0a25YqYb8z', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000527', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recT2Xihfu6B4wX3W', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000528', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recezvh6Dvf8ABacl', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000529', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recsDI0XtenriqJwV', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000530', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec5yLFr20Uy19JHe', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000531', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recGveQo2Lsj9BV5f', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000532', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recN2Bgab9FxZvGmK', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000533', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec8aAbuuaKqCVf9G', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000534', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recEko0sZL0vgkOxE', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000535', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recIjcRgwu5XYb1ra', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000536', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec9wgxzOX66GzMos', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000537', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recfMlA4vc9mJM9g0', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000538', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recF3MZSsfYVHgxfh', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000539', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec2eyXmTkBwGxNh6', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000540', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recdqiMST3e9EAhRx', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000541', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recXeChaFoSO1wDLj', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000542', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('rec6ta3TEIVsUhgou', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000543', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recveGbeftMfw5KZl', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000544', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recGP7U2M7EvhEI4p', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000545', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recw13HkbWS5Y80IR', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000546', function (req, res) {

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
            var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

            base('Artworks').find('recFpZDNXmwTiZVbz', function(err, record) {
                if (err) {
                    console.error(err); return;
                }
                //res.json(record);
                console.log(record);

                res.render(
                    'art/buy/buy-page.html',
                    record
                );
            });
        });
    app.get('/artCF000063', function (req, res) {

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
    app.get('/artCF000064', function (req, res) {

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
    app.get('/artCF000065', function (req, res) {

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
    app.get('/artCF000066', function (req, res) {

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
    app.get('/artCF000067', function (req, res) {

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
    app.get('/artCF000068', function (req, res) {

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
    app.get('/artCF000100', function (req, res) {

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
    app.get('/artCF000101', function (req, res) {

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
    app.get('/artCF000102', function (req, res) {

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
    app.get('/artCF000103', function (req, res) {

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
    app.get('/artCF000104', function (req, res) {

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
    app.get('/artCF000105', function (req, res) {

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
    app.get('/artCF000106', function (req, res) {

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
    app.get('/artCF000107', function (req, res) {

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
    app.get('/artCF000108', function (req, res) {

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
    app.get('/artCF000109', function (req, res) {

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
    app.get('/artCF000110', function (req, res) {

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
    app.get('/artCF000111', function (req, res) {

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
    app.get('/artCF000112', function (req, res) {

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
    app.get('/artCF000113', function (req, res) {

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
    app.get('/artCF000114', function (req, res) {

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
    app.get('/artCF000115', function (req, res) {

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
    app.get('/artCF000116', function (req, res) {

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
    app.get('/artCF000117', function (req, res) {

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
    app.get('/artCF000118', function (req, res) {

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
    app.get('/artCF000120', function (req, res) {

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
    app.get('/artCF000121', function (req, res) {

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
    app.get('/artCF000142', function (req, res) {

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
    app.get('/artCF000143', function (req, res) {

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
    app.get('/artCF000162', function (req, res) {

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
    app.get('/artCF000163', function (req, res) {

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
    app.get('/artCF000164', function (req, res) {

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
    app.get('/artCF000165', function (req, res) {

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
    app.get('/artCF000166', function (req, res) {

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
    app.get('/artCF000167', function (req, res) {

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
    app.get('/artCF000168', function (req, res) {

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
    app.get('/artCF000169', function (req, res) {

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
    app.get('/artCF000170', function (req, res) {

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
    app.get('/artCF000171', function (req, res) {

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
    app.get('/artCF000178', function (req, res) {

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
    app.get('/artCF000179', function (req, res) {

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
    app.get('/artCF000180', function (req, res) {

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
    app.get('/artCF000181', function (req, res) {

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
    app.get('/artCF000182', function (req, res) {

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
    app.get('/artCF000183', function (req, res) {

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
    app.get('/artCF000184', function (req, res) {

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
    app.get('/artCF000193', function (req, res) {

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
    app.get('/artCF000194', function (req, res) {

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
    app.get('/artCF000195', function (req, res) {

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
    app.get('/artCF000196', function (req, res) {

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
    app.get('/artCF000197', function (req, res) {

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
    app.get('/artCF000198', function (req, res) {

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
    app.get('/artCF000199', function (req, res) {

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
    app.get('/artCF000203', function (req, res) {

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
    app.get('/artCF000204', function (req, res) {

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
    app.get('/artCF000205', function (req, res) {

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
    app.get('/artCF000206', function (req, res) {

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
    app.get('/artCF000207', function (req, res) {

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
    app.get('/artCF000208', function (req, res) {

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
    app.get('/artCF000209', function (req, res) {

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
    app.get('/artCF000210', function (req, res) {

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
    app.get('/artCF000211', function (req, res) {

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
    app.get('/artCF000212', function (req, res) {

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
    app.get('/artCF000221', function (req, res) {

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
    app.get('/artCF000222', function (req, res) {

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
    app.get('/artCF000223', function (req, res) {

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
    app.get('/artCF000224', function (req, res) {

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
    app.get('/artCF000225', function (req, res) {

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
    app.get('/artCF000226', function (req, res) {

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
    app.get('/artCF000227', function (req, res) {

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
    app.get('/artCF000228', function (req, res) {

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
    app.get('/artCF000229', function (req, res) {

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
    app.get('/artCF000230', function (req, res) {

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
    app.get('/artCF000231', function (req, res) {

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
    app.get('/artCF000232', function (req, res) {

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
    app.get('/artCF000233', function (req, res) {

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
    app.get('/artCF000234', function (req, res) {

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
    app.get('/artCF000235', function (req, res) {

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
    app.get('/artCF000236', function (req, res) {

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
    app.get('/artCF000237', function (req, res) {

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
    app.get('/artCF000238', function (req, res) {

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
    app.get('/artCF000239', function (req, res) {

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
    app.get('/artCF000240', function (req, res) {

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
    app.get('/artCF000241', function (req, res) {

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
    app.get('/artCF000242', function (req, res) {

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
    app.get('/artCF000243', function (req, res) {

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
    app.get('/artCF000244', function (req, res) {

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
    app.get('/artCF000245', function (req, res) {

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
    app.get('/artCF000246', function (req, res) {

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
    app.get('/artCF000247', function (req, res) {

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
    app.get('/artCF000248', function (req, res) {

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
    app.get('/artCF000249', function (req, res) {

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
    app.get('/artCF000250', function (req, res) {

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
    app.get('/artCF000266', function (req, res) {

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
    app.get('/artCF000267', function (req, res) {

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
    app.get('/artCF000268', function (req, res) {

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
    app.get('/artCF000269', function (req, res) {

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
    app.get('/artCF000270', function (req, res) {

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
    app.get('/artCF000271', function (req, res) {

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
    app.get('/artCF000276', function (req, res) {

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
    app.get('/artCF000277', function (req, res) {

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
    app.get('/artCF000278', function (req, res) {

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
    app.get('/artCF000280', function (req, res) {

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
    app.get('/artCF000284', function (req, res) {

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
    app.get('/artCF000285', function (req, res) {

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
    app.get('/artCF000286', function (req, res) {

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
    app.get('/artCF000287', function (req, res) {

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
    app.get('/artCF000288', function (req, res) {

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
    app.get('/artCF000289', function (req, res) {

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
    app.get('/artCF000290', function (req, res) {

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
    app.get('/artCF000291', function (req, res) {

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
    app.get('/artCF000292', function (req, res) {

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
    app.get('/artCF000293', function (req, res) {

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
    app.get('/artCF000294', function (req, res) {

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
    app.get('/artCF000295', function (req, res) {

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
    app.get('/artCF000296', function (req, res) {

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
    app.get('/artCF000297', function (req, res) {

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
    app.get('/artCF000298', function (req, res) {

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
    app.get('/artCF000299', function (req, res) {

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
    app.get('/artCF000300', function (req, res) {

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
    app.get('/artCF000301', function (req, res) {

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
    app.get('/artCF000302', function (req, res) {

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
    app.get('/artCF000303', function (req, res) {

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
    app.get('/artCF000304', function (req, res) {

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
    app.get('/artCF000305', function (req, res) {

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
    app.get('/artCF000306', function (req, res) {

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
    app.get('/artCF000307', function (req, res) {

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
    app.get('/artCF000332', function (req, res) {

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
    app.get('/artCF000333', function (req, res) {

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
    app.get('/artCF000334', function (req, res) {

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
    app.get('/artCF000335', function (req, res) {

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
    app.get('/artCF000344', function (req, res) {

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
    app.get('/artCF000347', function (req, res) {

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
    app.get('/artCF000348', function (req, res) {

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
    app.get('/artCF000349', function (req, res) {

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
    app.get('/artCF000376', function (req, res) {

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
    app.get('/artCF000377', function (req, res) {

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
    app.get('/artCF000378', function (req, res) {

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
    app.get('/artCF000380', function (req, res) {

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
    app.get('/artCF000381', function (req, res) {

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
    app.get('/artCF000382', function (req, res) {

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
    app.get('/artCF000386', function (req, res) {

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
    app.get('/artCF000387', function (req, res) {

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
    app.get('/artCF000388', function (req, res) {

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
    app.get('/artCF000389', function (req, res) {

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
    app.get('/artCF000390', function (req, res) {

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
    app.get('/artCF000391', function (req, res) {

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







}
