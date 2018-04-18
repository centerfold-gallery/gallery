const express = require('express');
var compression = require('compression');
var sslRedirect = require('heroku-ssl-redirect');
const app = express();
const mustacheExpress = require('mustache-express');

var path = require('path')
var config = require('./config');

// Airtable Configuration
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: config.storageConfig.airtableAPIKey,
});
var base = Airtable.base(config.storageConfig.airtableBase);

// Static Asset Routes
app.use('/js', express.static('js'))
app.use('/stylesheets', express.static('stylesheets'))
app.use('/fonts', express.static('fonts'))

// SSL
app.use(sslRedirect());

// GZIP
app.use(compression());

// Body Parser for POST requests
var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

// Setup Mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');

app.get('/', function(req, res){
    var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .firstPage(function(err, homepageArt) {
                    if(err) {
                        reject(err)
                    }
                    else {
                        var jsonHomepageArt = homepageArt.map(function(homepageArt){
                            return homepageArt['_rawJson']
                        });
                        resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", maxRecords: 3, filterByFormula: filterStatement})
            .firstPage(function(err, homepageArtworks) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                        return homepageArtworks['_rawJson']
                    });
                    resolve(jsonHomepageArtworks);
                }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .firstPage(function(err, artists) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonArtists = artists.map(function(artist){
                        return artist['_rawJson']
                    });
                    resolve(jsonArtists);
                }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('index.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art', function(req, res){
    var context = {title: "Art", current_page: "1", next_page: "2", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/full.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/2', function(req, res){
    var context = {title: "Art", prev_page: "../art", current_page: "2", next_page: "3", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 2').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/3', function(req, res){
    var context = {title: "Art", prev_page: "2", current_page: "3", next_page: "4", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 3').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/4', function(req, res){
    var context = {title: "Art", prev_page: "3", current_page: "4", next_page: "5", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 4').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/5', function(req, res){
    var context = {title: "Art", prev_page: "4", current_page: "5", next_page: "6", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 5').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/6', function(req, res){
    var context = {title: "Art", prev_page: "5", current_page: "6", next_page: "7", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 6').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/7', function(req, res){
    var context = {title: "Art", prev_page: "6", current_page: "7", next_page: "8", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 7').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/8', function(req, res){
    var context = {title: "Art", prev_page: "7", current_page: "8", next_page: "9", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 8').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/9', function(req, res){
    var context = {title: "Art", prev_page: "8", current_page: "9", next_page: "10", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 9').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/10', function(req, res){
    var context = {title: "Art", prev_page: "9", current_page: "10", next_page: "11", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 10').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/11', function(req, res){
    var context = {title: "Art", prev_page: "10", current_page: "11", next_page: "12", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 11').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/12', function(req, res){
    var context = {title: "Art", prev_page: "11", current_page: "12", next_page: "13", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 12').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/13', function(req, res){
    var context = {title: "Art", prev_page: "12", current_page: "13", next_page: "14", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 13').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/14', function(req, res){
    var context = {title: "Art", prev_page: "13", current_page: "14", next_page: "15", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 14').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/15', function(req, res){
    var context = {title: "Art", prev_page: "14", current_page: "15", next_page: "16", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 15').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/16', function(req, res){
    var context = {title: "Art", prev_page: "15", current_page: "16", next_page: "17", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 16').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/17', function(req, res){
    var context = {title: "Art", prev_page: "16", current_page: "17", next_page: "18", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 17').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/18', function(req, res){
    var context = {title: "Art", prev_page: "17", current_page: "18", next_page: "19", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 18').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/19', function(req, res){
    var context = {title: "Art", prev_page: "18", current_page: "19", next_page: "20", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 19').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

app.get('/art/20', function(req, res){
    var context = {title: "Art", prev_page: "19", current_page: "20", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .eachPage(function page(homepageArt, fetchNextPage) {
                    var jsonHomepageArt = homepageArt.map(function(homepageArt){
                        return homepageArt['_rawJson']
                    });
                    resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    fetchNextPage();
                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(homepageArtworks, fetchNextPage) {
                var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                    return homepageArtworks['_rawJson']
                });
                resolve(jsonHomepageArtworks);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .eachPage(function page(artists, fetchNextPage) {
                var jsonArtists = artists.map(function(artist){
                    return artist['_rawJson']
                });
                resolve(jsonArtists);
                fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Homepage').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Art Page 20').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('art/bare.html', context);
                    });
                });
            });
        });
    });
});

// CF MODEL

app.get('/series', function (req, res) {
  res.render('series/index.html', {title: "Series", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/series/test', function(req, res){
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base(config.storageConfig.airtableBase);
        var context = {title: "Test", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Model')
                    .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                    .firstPage(function(err, homepageArt) {
                        if(err) {
                            reject(err)
                        }
                        else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt){
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
                });
            }
        var getArtwork = function(filterStatement){
            return new Promise(function(resolve, reject) {
            base('Artworks')
                .select({view: "Grid view", filterByFormula: filterStatement})
                .firstPage(function(err, homepageArtworks) {
                    if(err) {
                        reject(err)
                    }
                    else {
                        var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                            return homepageArtworks['_rawJson']
                        });
                        resolve(jsonHomepageArtworks);
                    }
                });
            });
        }
        var getArtists = function(filterStatement){
            return new Promise(function(resolve, reject) {
            base('Artists')
                .select({view: "Grid view", filterByFormula: filterStatement})
                .firstPage(function(err, artists) {
                    if(err) {
                        reject(err)
                    }
                    else {
                        var jsonArtists = artists.map(function(artist){
                            return artist['_rawJson']
                        });
                        resolve(jsonArtists);
                    }
                });
            });
        }
        function constructFilterStatement(records){
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1){
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Test').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result){
                context['homepageArtworks'] = result;
                getCollection('Test').then(function(result){
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result){
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result){
                            for(var i = 0; i < context['artPageArtworks'].length; i++){
                                for(var j = 0; j < result.length; j++){
                                    if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Model').find('recZQMn7mzVDKzrcF', function(err, record) {
                                if (err) {
                                    console.error(err); return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('series/collection/SC000001.html', context, ar)
                        });
                    });
                });
            });
        });
    });

app.post('/vote', function(req, res) {

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: config.storageConfig.airtableAPIKey}).base('appAxg6rhUJ9BZmV4');

    var name = req.body.name;
    var email = req.body.email;
    var vote1 = req.body.vote1;
    var vote2 = req.body.vote2;
    var vote3 = req.body.vote3;

    base('Voting').create({}, function(err, record) {
        if (err) { console.error(err); return; }
        console.log(record.getId());

        var newrecord = record.getId();

        base('Voting').replace(newrecord, {
          "Name": name,
          "Email": email,
          "Vote 1": [
            "recyLu8aFvNB5Ba2H"
          ],
          "Vote 2": [
            "rec33Zq3Nr19AqnoK"
          ],
          "Vote 3": [
            "recuWofSqOpHHWHEp"
          ]
        }, function(err, record) {
            if (err) { console.error(err); return; }
            console.log("Name = "+name+", Email = "+email+", Voted for "+vote1+", "+vote2+", "+vote3);
        });
    });

    res.end("yes");
});

// Featured Collection 1 Configuration

app.get('/featured-collections/FC000001-moments-distorted', function(req, res){
    var context = {title: "Moments,, Distorted", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .firstPage(function(err, homepageArt) {
                    if(err) {
                        reject(err)
                    }
                    else {
                        var jsonHomepageArt = homepageArt.map(function(homepageArt){
                            return homepageArt['_rawJson']
                        });
                        resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .firstPage(function(err, homepageArtworks) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                        return homepageArtworks['_rawJson']
                    });
                    resolve(jsonHomepageArtworks);
                }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .firstPage(function(err, artists) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonArtists = artists.map(function(artist){
                        return artist['_rawJson']
                    });
                    resolve(jsonArtists);
                }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Moments,, Distorted').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Moments,, Distorted').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('featured-collections/FC000001-moments-distorted.html', context);
                    });
                });
            });
        });
    });
});

//Featured Collection 2 Configuration

app.get('/featured-collections/FC000002-freckle-blemish-wrinkle-scar', function(req, res){
    var context = {title: "Freckle Blemish Wrinkle Scar", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .firstPage(function(err, homepageArt) {
                    if(err) {
                        reject(err)
                    }
                    else {
                        var jsonHomepageArt = homepageArt.map(function(homepageArt){
                            return homepageArt['_rawJson']
                        });
                        resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", sort: [{field: "Numbered In Collection", direction: "asc"}], filterByFormula: filterStatement})
            .firstPage(function(err, homepageArtworks) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                        return homepageArtworks['_rawJson']
                    });
                    resolve(jsonHomepageArtworks);
                }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .firstPage(function(err, artists) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonArtists = artists.map(function(artist){
                        return artist['_rawJson']
                    });
                    resolve(jsonArtists);
                }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Freckle, Blemish, Wrinkle, Scar').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Freckle, Blemish, Wrinkle, Scar').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('featured-collections/FC000002-untitled.html', context);
                    });
                });
            });
        });
    });
});

//Featured Collection 3 Configuration

app.get('/featured-collections/FC000003-knowing-yourself', function(req, res){
    var context = {title: "Knowing Yourself Lets You Understand Others", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .firstPage(function(err, homepageArt) {
                    if(err) {
                        reject(err)
                    }
                    else {
                        var jsonHomepageArt = homepageArt.map(function(homepageArt){
                            return homepageArt['_rawJson']
                        });
                        resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", sort: [{field: "Numbered In Collection", direction: "asc"}], filterByFormula: filterStatement})
            .firstPage(function(err, homepageArtworks) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                        return homepageArtworks['_rawJson']
                    });
                    resolve(jsonHomepageArtworks);
                }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .firstPage(function(err, artists) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonArtists = artists.map(function(artist){
                        return artist['_rawJson']
                    });
                    resolve(jsonArtists);
                }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Knowing Yourself Lets You Understand Others').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Knowing Yourself Lets You Understand Others').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('featured-collections/FC000003.html', context);
                    });
                });
            });
        });
    });
});

// Shirts Configuration

app.get('/merch', function (req, res) {
  res.render('featured-collections/shirts.html', {title: "Merch", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

// ArtistFocus01 Configuration

app.get('/artist-focus', function(req, res){
    var context = {title: "Artist Focus", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
                .firstPage(function(err, homepageArt) {
                    if(err) {
                        reject(err)
                    }
                    else {
                        var jsonHomepageArt = homepageArt.map(function(homepageArt){
                            return homepageArt['_rawJson']
                        });
                        resolve(jsonHomepageArt[0]['fields']['Artworks']);
                    }
                });
            });
        }

    var getArtwork = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artworks')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .firstPage(function(err, homepageArtworks) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
                        return homepageArtworks['_rawJson']
                    });
                    resolve(jsonHomepageArtworks);
                }
            });
        });
    }

    var getArtists = function(filterStatement){
        return new Promise(function(resolve, reject) {
        base('Artists')
            .select({view: "Grid view", filterByFormula: filterStatement})
            .firstPage(function(err, artists) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonArtists = artists.map(function(artist){
                        return artist['_rawJson']
                    });
                    resolve(jsonArtists);
                }
            });
        });
    }

    function constructFilterStatement(records){
        var filterStatement = "OR("
        for (var i = 0; i < records.length; i++) {
            filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
            if (i < records.length - 1){
                filterStatement = filterStatement + ',';
            }
        }
        filterStatement = filterStatement + ")";
        return filterStatement;
    }

    getCollection('Artist Focus 02').then(function(result) {
        var filterStatement = constructFilterStatement(result);
        getArtwork(filterStatement).then(function(result){
            context['homepageArtworks'] = result;
            getCollection('Artist Focus 02').then(function(result){
                var filterStatement = constructFilterStatement(result);
                getArtwork(filterStatement).then(function(result){
                    context['artPageArtworks'] = result;
                    // Parse the list of all the artist's ids
                    var artistIDs = [];
                    for (var i = 0; i < result.length; i++) {
                        artistIDs[i] = result[i].fields.Artist[0];
                    }
                    var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                    getArtists(artPageArtistsFilterStatement).then(function(result){
                        for(var i = 0; i < context['artPageArtworks'].length; i++){
                            for(var j = 0; j < result.length; j++){
                                if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
                                    context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                }
                            }
                        }
                        res.render('artist-focus/index.html', context);
                    });
                });
            });
        });
    });
});

app.get('/events', function (req, res) {
    var context = {title: "Events", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getUpcomingEvents = new Promise(function(resolve, reject) {
        base('Events')
            .select({view: "All Events", filterByFormula: "{Type} = 'Upcoming Events'"})
            .firstPage(function(err, upcomingEvents) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonUpcomingEvents = upcomingEvents.map(function(upcomingEvent){
                        return upcomingEvent['_rawJson']
                    });
                    resolve(jsonUpcomingEvents);
                }
        });
    });

    var getPastEvents = new Promise(function(resolve, reject) {
        base('Events')
            .select({view: "All Events", filterByFormula: "{Type} = 'Past Events'"})
            .firstPage(function(err, pastEvents) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonPastEvents = pastEvents.map(function(pastEvent){
                        return pastEvent['_rawJson']
                    });
                    resolve(jsonPastEvents);
                }
        });
    });

    var getParties = new Promise(function(resolve, reject) {
        base('Events')
            .select({view: "All Events", filterByFormula: "{Type} = 'Parties'"})
            .firstPage(function(err, Parties) {
                if(err) {
                    reject(err)
                }
                else {
                    var jsonParties = Parties.map(function(party){
                        return party['_rawJson']
                    });
                    resolve(jsonParties);
                }
        });
    });

    getUpcomingEvents.then(function (result){
        context['upcomingEvents'] = result;
        getPastEvents.then(function(result){
            context['pastEvents'] = result;
            getParties.then(function(result){
                context['parties'] = result;
                res.render('events/index.html', context);
            });
        });
    });
});

// General Store

app.get('/general-store', function (req, res) {
  res.render('general-store/index.html', {title: "General Store", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/general-store/vendors', function (req, res) {
  res.render('general-store/vendors.html', {title: "Vendors", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/artists', function (req, res) {
  res.render('artists/index.html', {title: "Artists", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/services', function (req, res) {
  res.render('services/index.html', {title: "Services", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/about', function (req, res) {
  res.render('about/index.html', {title: "About", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/faqs', function (req, res) {
  res.render('faqs/index.html', {title: "FAQs", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/privacy', function (req, res) {
  res.render('privacy/index.html', {title: "Privacy Policy", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/agreement', function (req, res) {
  res.render('agreement/index.html', {title: "Artist Agreement", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/tools', function (req, res) {
  res.render('tools/index.html', {title: "Tools", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/tools/cert', function (req, res) {
  res.render('tools/cert.html', {title: "Certificate of Authenticity", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/tools/hanging-guide', function (req, res) {
  res.render('tools/hanging-guide.html', {title: "Hanging Guide", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/gallery', function (req, res) {
  res.render('gallery/index.html', {title: "Gallery", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/thanks', function (req, res) {
  res.render('thanks/index.html', {title: "Thanks!", static_url: "https://s3.amazonaws.com/centerfold-website/"});
});

app.get('/error', function (req, res) {
  res.render('error/index.html', {title: "Error", static_url: "https://s3.amazonaws.com/centerfold-website/"});
});


var routes = require('./routes/buy-pages')(app);
var routes = require('./routes/artist-pages')(app);


app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url, static_url: "https://s3.amazonaws.com/centerfold-website/", title: "Page Not Found"});
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Centerfold App listening on port ' + port)
})
