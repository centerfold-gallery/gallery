const express = require('express');
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
                        res.render('featured-collections/FC000001-moments-distorted/index.html', context);
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

app.get('/services', function (req, res) {
  res.render('services/index.html', {title: "Services", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/about', function (req, res) {
  res.render('about/index.html', {title: "About", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/thanks', function (req, res) {
  res.render('thanks/index.html', {title: "About", static_url: "https://s3.amazonaws.com/centerfold-website/"});
});

app.get('/error', function (req, res) {
  res.render('error/index.html', {title: "About", static_url: "https://s3.amazonaws.com/centerfold-website/"});
});

app.get('/susan-nelson', function (req, res) {
  res.render('susan-nelson/index.html', {title: "Susan Nelson", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});


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
