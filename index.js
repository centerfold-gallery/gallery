const express = require('express');
var compression = require('compression');
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

// GZIP
app.use(compression());

// Setup Mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');

app.get('/', function(req, res){
    var context = {static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

    var getCollection = function(title) {
        return new Promise(function(resolve, reject) {
            base('Online Featured Collection')
                .select({view: "Grid view", maxRecords: 3, filterByFormula: "{Title} = '"+ title +"'"})
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

app.get('/art', function(req, res){
    var context = {title: "Art", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

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
                        res.render('art/index.html', context);
                    });
                });
            });
        });
    });
});

// app.get('/art/2', function(req, res){
//     var context = {title: "Art", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};
//
//     var getCollection = function(title) {
//         return new Promise(function(resolve, reject) {
//             base('Online Featured Collection')
//                 .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
//                 .eachPage(function page(homepageArt, fetchNextPage) {
//                     var jsonHomepageArt = homepageArt.map(function(homepageArt){
//                         return homepageArt['_rawJson']
//                     });
//                     resolve(jsonHomepageArt[0]['fields']['Artworks']);
//                     fetchNextPage();
//                 }, function done(err) {
//                     if (err) { console.error(err); return; }
//                 });
//             });
//         }
//
//     var getArtwork = function(filterStatement){
//         return new Promise(function(resolve, reject) {
//         base('Artworks')
//             .select({view: "Grid view", filterByFormula: filterStatement})
//             .eachPage(function page(homepageArtworks, fetchNextPage) {
//                 var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
//                     return homepageArtworks['_rawJson']
//                 });
//                 resolve(jsonHomepageArtworks);
//                 fetchNextPage();
//             }, function done(err) {
//                 if (err) { console.error(err); return; }
//             });
//         });
//     }
//
//     var getArtists = function(filterStatement){
//         return new Promise(function(resolve, reject) {
//         base('Artists')
//             .select({view: "Grid view", filterByFormula: filterStatement})
//             .eachPage(function page(artists, fetchNextPage) {
//                 var jsonArtists = artists.map(function(artist){
//                     return artist['_rawJson']
//                 });
//                 resolve(jsonArtists);
//                 fetchNextPage();
//             }, function done(err) {
//                 if (err) { console.error(err); return; }
//             });
//         });
//     }
//
//     function constructFilterStatement(records){
//         var filterStatement = "OR("
//         for (var i = 0; i < records.length; i++) {
//             filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
//             if (i < records.length - 1){
//                 filterStatement = filterStatement + ',';
//             }
//         }
//         filterStatement = filterStatement + ")";
//         return filterStatement;
//     }
//
//     getCollection('Homepage').then(function(result) {
//         var filterStatement = constructFilterStatement(result);
//         getArtwork(filterStatement).then(function(result){
//             context['homepageArtworks'] = result;
//             getCollection('Art Page 2').then(function(result){
//                 var filterStatement = constructFilterStatement(result);
//                 getArtwork(filterStatement).then(function(result){
//                     context['artPageArtworks'] = result;
//                     // Parse the list of all the artist's ids
//                     var artistIDs = [];
//                     for (var i = 0; i < result.length; i++) {
//                         artistIDs[i] = result[i].fields.Artist[0];
//                     }
//                     var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
//                     getArtists(artPageArtistsFilterStatement).then(function(result){
//                         for(var i = 0; i < context['artPageArtworks'].length; i++){
//                             for(var j = 0; j < result.length; j++){
//                                 if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
//                                     context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
//                                 }
//                             }
//                         }
//                         res.render('art/index.html', context);
//                     });
//                 });
//             });
//         });
//     });
// });
//
// app.get('/art/3', function(req, res){
//     var context = {title: "Art", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};
//
//     var getCollection = function(title) {
//         return new Promise(function(resolve, reject) {
//             base('Online Featured Collection')
//                 .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
//                 .eachPage(function page(homepageArt, fetchNextPage) {
//                     var jsonHomepageArt = homepageArt.map(function(homepageArt){
//                         return homepageArt['_rawJson']
//                     });
//                     resolve(jsonHomepageArt[0]['fields']['Artworks']);
//                     fetchNextPage();
//                 }, function done(err) {
//                     if (err) { console.error(err); return; }
//                 });
//             });
//         }
//
//     var getArtwork = function(filterStatement){
//         return new Promise(function(resolve, reject) {
//         base('Artworks')
//             .select({view: "Grid view", filterByFormula: filterStatement})
//             .eachPage(function page(homepageArtworks, fetchNextPage) {
//                 var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
//                     return homepageArtworks['_rawJson']
//                 });
//                 resolve(jsonHomepageArtworks);
//                 fetchNextPage();
//             }, function done(err) {
//                 if (err) { console.error(err); return; }
//             });
//         });
//     }
//
//     var getArtists = function(filterStatement){
//         return new Promise(function(resolve, reject) {
//         base('Artists')
//             .select({view: "Grid view", filterByFormula: filterStatement})
//             .eachPage(function page(artists, fetchNextPage) {
//                 var jsonArtists = artists.map(function(artist){
//                     return artist['_rawJson']
//                 });
//                 resolve(jsonArtists);
//                 fetchNextPage();
//             }, function done(err) {
//                 if (err) { console.error(err); return; }
//             });
//         });
//     }
//
//     function constructFilterStatement(records){
//         var filterStatement = "OR("
//         for (var i = 0; i < records.length; i++) {
//             filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
//             if (i < records.length - 1){
//                 filterStatement = filterStatement + ',';
//             }
//         }
//         filterStatement = filterStatement + ")";
//         return filterStatement;
//     }
//
//     getCollection('Homepage').then(function(result) {
//         var filterStatement = constructFilterStatement(result);
//         getArtwork(filterStatement).then(function(result){
//             context['homepageArtworks'] = result;
//             getCollection('Art Page 3').then(function(result){
//                 var filterStatement = constructFilterStatement(result);
//                 getArtwork(filterStatement).then(function(result){
//                     context['artPageArtworks'] = result;
//                     // Parse the list of all the artist's ids
//                     var artistIDs = [];
//                     for (var i = 0; i < result.length; i++) {
//                         artistIDs[i] = result[i].fields.Artist[0];
//                     }
//                     var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
//                     getArtists(artPageArtistsFilterStatement).then(function(result){
//                         for(var i = 0; i < context['artPageArtworks'].length; i++){
//                             for(var j = 0; j < result.length; j++){
//                                 if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
//                                     context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
//                                 }
//                             }
//                         }
//                         res.render('art/index.html', context);
//                     });
//                 });
//             });
//         });
//     });
// });
//
// app.get('/art/4', function(req, res){
//     var context = {title: "Art", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};
//
//     var getCollection = function(title) {
//         return new Promise(function(resolve, reject) {
//             base('Online Featured Collection')
//                 .select({view: "Grid view", filterByFormula: "{Title} = '"+ title +"'"})
//                 .eachPage(function page(homepageArt, fetchNextPage) {
//                     var jsonHomepageArt = homepageArt.map(function(homepageArt){
//                         return homepageArt['_rawJson']
//                     });
//                     resolve(jsonHomepageArt[0]['fields']['Artworks']);
//                     fetchNextPage();
//                 }, function done(err) {
//                     if (err) { console.error(err); return; }
//                 });
//             });
//         }
//
//     var getArtwork = function(filterStatement){
//         return new Promise(function(resolve, reject) {
//         base('Artworks')
//             .select({view: "Grid view", filterByFormula: filterStatement})
//             .eachPage(function page(homepageArtworks, fetchNextPage) {
//                 var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks){
//                     return homepageArtworks['_rawJson']
//                 });
//                 resolve(jsonHomepageArtworks);
//                 fetchNextPage();
//             }, function done(err) {
//                 if (err) { console.error(err); return; }
//             });
//         });
//     }
//
//     var getArtists = function(filterStatement){
//         return new Promise(function(resolve, reject) {
//         base('Artists')
//             .select({view: "Grid view", filterByFormula: filterStatement})
//             .eachPage(function page(artists, fetchNextPage) {
//                 var jsonArtists = artists.map(function(artist){
//                     return artist['_rawJson']
//                 });
//                 resolve(jsonArtists);
//                 fetchNextPage();
//             }, function done(err) {
//                 if (err) { console.error(err); return; }
//             });
//         });
//     }
//
//     function constructFilterStatement(records){
//         var filterStatement = "OR("
//         for (var i = 0; i < records.length; i++) {
//             filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
//             if (i < records.length - 1){
//                 filterStatement = filterStatement + ',';
//             }
//         }
//         filterStatement = filterStatement + ")";
//         return filterStatement;
//     }
//
//     getCollection('Homepage').then(function(result) {
//         var filterStatement = constructFilterStatement(result);
//         getArtwork(filterStatement).then(function(result){
//             context['homepageArtworks'] = result;
//             getCollection('Art Page 4').then(function(result){
//                 var filterStatement = constructFilterStatement(result);
//                 getArtwork(filterStatement).then(function(result){
//                     context['artPageArtworks'] = result;
//                     // Parse the list of all the artist's ids
//                     var artistIDs = [];
//                     for (var i = 0; i < result.length; i++) {
//                         artistIDs[i] = result[i].fields.Artist[0];
//                     }
//                     var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
//                     getArtists(artPageArtistsFilterStatement).then(function(result){
//                         for(var i = 0; i < context['artPageArtworks'].length; i++){
//                             for(var j = 0; j < result.length; j++){
//                                 if(result[j].id == context['artPageArtworks'][i].fields.Artist[0]){
//                                     context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
//                                 }
//                             }
//                         }
//                         res.render('art/index.html', context);
//                     });
//                 });
//             });
//         });
//     });
// });

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

//Featured Collection 2 Configuration

app.get('/featured-collections/FC000002-freckle-blemish-wrinkle-scar', function(req, res){
    var context = {title: "Untitled", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey};

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
                        res.render('featured-collections/FC000002-untitled/index.html', context);
                    });
                });
            });
        });
    });
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

app.get('/artists', function (req, res) {
  res.render('artists/index.html', {title: "Artists", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/services', function (req, res) {
  res.render('services/index.html', {title: "Services", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/about', function (req, res) {
  res.render('about/index.html', {title: "About", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/gallery', function (req, res) {
  res.render('gallery/index.html', {title: "Gallery", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/gallery/this-is-not-an-apology', function (req, res) {
  res.render('gallery/zoe/dinner.html', {title: "This Is Not An Apology", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
});

app.get('/gallery/this-is-not-an-apology/press', function (req, res) {
  res.render('gallery/zoe/press.html', {title: "Press, This Is Not An Apology", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.storageConfig.stripeAPIKey});
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
