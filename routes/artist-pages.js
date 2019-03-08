module.exports = function(app) {
    var config = require('./../config');

    
    app.get('/artists/hailey-anne-guzik', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Hailey Anne Guzik",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Hailey Anne Guzik').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Hailey Anne Guzik').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recG6rMJu0JHvlOPr', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/pascal-assaleh', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Pascal Assaleh",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Pascal Assaleh').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Pascal Assaleh').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recSEdYd7a9iIvcHE', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/koku-awuye', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Koku Awuye",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Koku Awuye').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Koku Awuye').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recWonGybLyjfA9NB', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/addison-bale', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Addison Bale",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Addison Bale').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Addison Bale').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recGuyWQec8puTqYE', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/laurence-belzile', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Laurence Belzile",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Laurence Belzile').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Laurence Belzile').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recG3jRC4C0ScRTG9', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/sarah-bentivegna', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Sarah Bentivegna",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Sarah Bentivegna').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Sarah Bentivegna').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recSkhOXf0Pcr0eAG', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/jonathan-bernier', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Jonathan Bernier",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Jonathan Bernier').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Jonathan Bernier').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('reca02Q7EUOqqx1pu', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/romane-bladou', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Romane Bladou",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Romane Bladou').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Romane Bladou').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recVxpRnFemFvOaUH', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/gab-bois', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Gab Bois",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Gab Bois').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Gab Bois').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recQZOw3G4Tk7W4vH', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/zoe-boivin', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Zoé Boivin",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Zoé Boivin').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Zoé Boivin').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recBlpFHOxz5zzZyE', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/maxime-brown', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Maxime Brown",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Maxime Brown').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Maxime Brown').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recUQMAsWDUmi1mCn', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/heidi-cardyn', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Heidi Cardyn",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Heidi Cardyn').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Heidi Cardyn').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('reclOxeWYs83pVJn6', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/nina-chabel', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Nina Chabel",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Nina Chabel').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Nina Chabel').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recDcXYDNzVTawkje', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/madeleine-chevalier', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Madeleine Chevalier",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Madeleine Chevalier').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Madeleine Chevalier').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recMNLqdIHrMa5oav', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/emmanuel-chieze', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Emmanuel Chieze",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Emmanuel Chieze').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Emmanuel Chieze').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recS7CniNpRCuVBXX', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/kathryn-ciu-leci', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Kathryn Ciu Leci",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Kathryn Ciu Leci').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Kathryn Ciu Leci').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recBh3LszpY8G1mVq', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/nastia-cloutier-ignatiev', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Nastia Cloutier-Ignatiev",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Nastia Cloutier-Ignatiev').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Nastia Cloutier-Ignatiev').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recmSM758ErJUfeaC', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/jacob-cote', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Jacob Côté",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Jacob Côté').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Jacob Côté').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recsDQUimzE3IqnBI', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/emma-cross', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Emma Cross",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Emma Cross').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Emma Cross').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recxMUSRdJznMtqZb', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/heidi-daehler', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Heidi Daehler",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Heidi Daehler').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Heidi Daehler').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recHsmq8W3SzadxwO', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/polina-dmitrievna-stanevskaya', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Polina Dmitrievna Stanevskaya",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Polina Dmitrievna Stanevskaya').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Polina Dmitrievna Stanevskaya').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recAJfhOJ61q915rg', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/erzulie', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Erzulie",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Erzulie').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Erzulie').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recTGZv0KNx336X2g', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/serge-demetrius-dube', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Serge Demetrius Dube",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Serge Demetrius Dube').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Serge Demetrius Dube').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recoYz8UhigEXkYOK', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/ariane-fairlie', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Ariane Fairlie",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Ariane Fairlie').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Ariane Fairlie').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec529N9LI8IWeRnV', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/catherine-fitri-prince', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Catherine Fitri Prince",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Catherine Fitri Prince').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Catherine Fitri Prince').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recHc2aSSONTjZrxA', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/nikolay-gamurar', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Nikolay Gamurar",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Nikolay Gamurar').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Nikolay Gamurar').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recdJiDCCJdQAHp9U', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/sayeh-gold', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Sayeh Gold",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Sayeh Gold').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Sayeh Gold').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recc5WVJC0l0n4ltZ', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/victoria-gravel', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Victoria Gravel",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Victoria Gravel').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Victoria Gravel').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recSEUeZhq5HBE5U1', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/ali-inay', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Ali Inay",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Ali Inay').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Ali Inay').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recJIwVBtePe7HroF', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/dalia-janian', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Dalia Janian",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Dalia Janian').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Dalia Janian').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recT2DOi4xY2pjDSl', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/cheyenne-jenkins', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Cheyenne Jenkins",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Cheyenne Jenkins').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Cheyenne Jenkins').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rectL6JliLHkUnnvV', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/cairo-justice', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Cairo Justice",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Cairo Justice').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Cairo Justice').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('reccs4fESX1q0W4c6', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/jordan-kasarjian', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Jordan Kasarjian",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Jordan Kasarjian').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Jordan Kasarjian').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recFb9uzqbDDPZmz5', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/minji-kim', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Minji Kim",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Minji Kim').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Minji Kim').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recKnv2iQYjUaCI0h', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/madeline-kinney', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Madeline Kinney",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Madeline Kinney').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Madeline Kinney').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recDK1R6iHIy3ntNK', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/lianna-klassen', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Lianna Klassen",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Lianna Klassen').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Lianna Klassen').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('receFZmirVPH5qApk', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/kristal-kordich-crandall', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Kristal Kordich-Crandall",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Kristal Kordich-Crandall').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Kristal Kordich-Crandall').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recPK96u2rzPGz5tx', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/ryan-lebel', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Ryan Lebel",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Ryan Lebel').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Ryan Lebel').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recy9uCAlzeWb4Aee', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/marie-pier-leclerc', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Marie-Pier Leclerc",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Marie-Pier Leclerc').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Marie-Pier Leclerc').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec6LJM5crjkU5g6L', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    // app.get('/artists/alessandra-lontra', function(req, res) {
    //     var Airtable = require('airtable');
    //     var base = new Airtable({
    //         apiKey: config.storageConfig.airtableAPIKey
    //     }).base(config.storageConfig.airtableBase);
    //     var context = {
    //         title: "Alessandra Lontra",
    //         static_url: "https://s3.amazonaws.com/centerfold-website/",
    //         stripeAPIKey: config.storageConfig.stripeAPIKey
    //     };
    //     var getCollection = function(title) {
    //         return new Promise(function(resolve, reject) {
    //             base('Artists')
    //                 .select({
    //                     view: "Grid view",
    //                     filterByFormula: "{Full Name} = '" + title + "'"
    //                 })
    //                 .firstPage(function(err, homepageArt) {
    //                     if (err) {
    //                         reject(err)
    //                     } else {
    //                         var jsonHomepageArt = homepageArt.map(function(homepageArt) {
    //                             return homepageArt['_rawJson']
    //                         });
    //                         resolve(jsonHomepageArt[0]['fields']['Artworks']);
    //                     }
    //                 });
    //         });
    //     }
    //     var getArtwork = function(filterStatement) {
    //         return new Promise(function(resolve, reject) {
    //             base('Artworks')
    //                 .select({
    //                     view: "Grid view",
    //                     filterByFormula: filterStatement
    //                 })
    //                 .firstPage(function(err, homepageArtworks) {
    //                     if (err) {
    //                         reject(err)
    //                     } else {
    //                         var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
    //                             return homepageArtworks['_rawJson']
    //                         });
    //                         resolve(jsonHomepageArtworks);
    //                     }
    //                 });
    //         });
    //     }
    //     var getArtists = function(filterStatement) {
    //         return new Promise(function(resolve, reject) {
    //             base('Artists')
    //                 .select({
    //                     view: "Grid view",
    //                     filterByFormula: filterStatement
    //                 })
    //                 .firstPage(function(err, artists) {
    //                     if (err) {
    //                         reject(err)
    //                     } else {
    //                         var jsonArtists = artists.map(function(artist) {
    //                             return artist['_rawJson']
    //                         });
    //                         resolve(jsonArtists);
    //                     }
    //                 });
    //         });
    //     }
    //
    //     function constructFilterStatement(records) {
    //         var filterStatement = "OR("
    //         for (var i = 0; i < records.length; i++) {
    //             filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
    //             if (i < records.length - 1) {
    //                 filterStatement = filterStatement + ',';
    //             }
    //         }
    //         filterStatement = filterStatement + ")";
    //         return filterStatement;
    //     }
    //     getCollection('Alessandra Lontra').then(function(result) {
    //         var filterStatement = constructFilterStatement(result);
    //         getArtwork(filterStatement).then(function(result) {
    //             context['homepageArtworks'] = result;
    //             getCollection('Alessandra Lontra').then(function(result) {
    //                 var filterStatement = constructFilterStatement(result);
    //                 getArtwork(filterStatement).then(function(result) {
    //                     context['artPageArtworks'] = result;
    //                     // Parse the list of all the artist's ids
    //                     var artistIDs = [];
    //                     for (var i = 0; i < result.length; i++) {
    //                         artistIDs[i] = result[i].fields.Artist[0];
    //                     }
    //                     var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
    //                     getArtists(artPageArtistsFilterStatement).then(function(result) {
    //                         for (var i = 0; i < context['artPageArtworks'].length; i++) {
    //                             for (var j = 0; j < result.length; j++) {
    //                                 if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
    //                                     context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
    //                                 }
    //                             }
    //                         }
    //                         base('Artists').find('reciN4bPao4aRbPMN', function(err, record) {
    //                             if (err) {
    //                                 console.error(err);
    //                                 return;
    //                             }
    //                             //res.json(record);
    //                             console.log(record);
    //                             var artistRecord;
    //                             var record;
    //                             record['artistRecord'] = ar;
    //                         });
    //                         var ar;
    //                         console.log(context);
    //                         res.render('artists/artists.html', context, ar)
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // });
    // app.get('/artists/dustyn-lucas', function(req, res) {
    //     var Airtable = require('airtable');
    //     var base = new Airtable({
    //         apiKey: config.storageConfig.airtableAPIKey
    //     }).base(config.storageConfig.airtableBase);
    //     var context = {
    //         title: "Dustyn Lucas",
    //         static_url: "https://s3.amazonaws.com/centerfold-website/",
    //         stripeAPIKey: config.storageConfig.stripeAPIKey
    //     };
    //     var getCollection = function(title) {
    //         return new Promise(function(resolve, reject) {
    //             base('Artists')
    //                 .select({
    //                     view: "Grid view",
    //                     filterByFormula: "{Full Name} = '" + title + "'"
    //                 })
    //                 .firstPage(function(err, homepageArt) {
    //                     if (err) {
    //                         reject(err)
    //                     } else {
    //                         var jsonHomepageArt = homepageArt.map(function(homepageArt) {
    //                             return homepageArt['_rawJson']
    //                         });
    //                         resolve(jsonHomepageArt[0]['fields']['Artworks']);
    //                     }
    //                 });
    //         });
    //     }
    //     var getArtwork = function(filterStatement) {
    //         return new Promise(function(resolve, reject) {
    //             base('Artworks')
    //                 .select({
    //                     view: "Grid view",
    //                     filterByFormula: filterStatement
    //                 })
    //                 .firstPage(function(err, homepageArtworks) {
    //                     if (err) {
    //                         reject(err)
    //                     } else {
    //                         var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
    //                             return homepageArtworks['_rawJson']
    //                         });
    //                         resolve(jsonHomepageArtworks);
    //                     }
    //                 });
    //         });
    //     }
    //     var getArtists = function(filterStatement) {
    //         return new Promise(function(resolve, reject) {
    //             base('Artists')
    //                 .select({
    //                     view: "Grid view",
    //                     filterByFormula: filterStatement
    //                 })
    //                 .firstPage(function(err, artists) {
    //                     if (err) {
    //                         reject(err)
    //                     } else {
    //                         var jsonArtists = artists.map(function(artist) {
    //                             return artist['_rawJson']
    //                         });
    //                         resolve(jsonArtists);
    //                     }
    //                 });
    //         });
    //     }
    //
    //     function constructFilterStatement(records) {
    //         var filterStatement = "OR("
    //         for (var i = 0; i < records.length; i++) {
    //             filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
    //             if (i < records.length - 1) {
    //                 filterStatement = filterStatement + ',';
    //             }
    //         }
    //         filterStatement = filterStatement + ")";
    //         return filterStatement;
    //     }
    //     getCollection('Dustyn Lucas').then(function(result) {
    //         var filterStatement = constructFilterStatement(result);
    //         getArtwork(filterStatement).then(function(result) {
    //             context['homepageArtworks'] = result;
    //             getCollection('Dustyn Lucas').then(function(result) {
    //                 var filterStatement = constructFilterStatement(result);
    //                 getArtwork(filterStatement).then(function(result) {
    //                     context['artPageArtworks'] = result;
    //                     // Parse the list of all the artist's ids
    //                     var artistIDs = [];
    //                     for (var i = 0; i < result.length; i++) {
    //                         artistIDs[i] = result[i].fields.Artist[0];
    //                     }
    //                     var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
    //                     getArtists(artPageArtistsFilterStatement).then(function(result) {
    //                         for (var i = 0; i < context['artPageArtworks'].length; i++) {
    //                             for (var j = 0; j < result.length; j++) {
    //                                 if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
    //                                     context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
    //                                 }
    //                             }
    //                         }
    //                         base('Artists').find('recwBpM7tf5Lblbk4', function(err, record) {
    //                             if (err) {
    //                                 console.error(err);
    //                                 return;
    //                             }
    //                             //res.json(record);
    //                             console.log(record);
    //                             var artistRecord;
    //                             var record;
    //                             record['artistRecord'] = ar;
    //                         });
    //                         var ar;
    //                         console.log(context);
    //                         res.render('artists/artists.html', context, ar)
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // });
    app.get('/artists/mahnoor-malik', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Mahnoor Malik",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Mahnoor Malik').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Mahnoor Malik').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recXzSFhvOx99I1X1', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/schael-marceus', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Schaël Marcéus",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Schaël Marcéus').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Schaël Marcéus').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recIW6leg8QzvlflF', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/aydin-matlabi', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Aydin Matlabi",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Aydin Matlabi').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Aydin Matlabi').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec6bVdmgnlqUDE16', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/alexia-mckindsey', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Alexia McKindsey",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Alexia McKindsey').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Alexia McKindsey').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recvVtAgROgMzKRvf', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/hunter-mclean', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Hunter McLean",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Hunter McLean').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Hunter McLean').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec4A2WryLCqvYJ7L', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/genevieve-moreau', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Geneviève Moreau",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Geneviève Moreau').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Geneviève Moreau').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recz8bwQblt0Q50Ys', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/sandra-morellato', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Sandra Morellato",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Sandra Morellato').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Sandra Morellato').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec6HPDyyBVfCffWd', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/stephanie-morin', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Stephanie Morin",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Stephanie Morin').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Stephanie Morin').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec2RKYOiyKZMEMAK', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/devon-munro-menegon', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Devon Munro Menegon",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Devon Munro Menegon').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Devon Munro Menegon').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recDjJCc7eiYMVsR2', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/jordann-murray', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Jordann Murray",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Jordann Murray').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Jordann Murray').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recNHkvMLCdwS3X6b', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/lesya-nakoneczny', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Lesya Nakoneczny",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Lesya Nakoneczny').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Lesya Nakoneczny').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recFH2p7NZyKMiGAW', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/andrew-nowacki', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Andrew Nowacki",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Andrew Nowacki').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Andrew Nowacki').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recqEzSkKNMZm0ifV', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/maela-ohana', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Maela Ohana",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Maela Ohana').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Maela Ohana').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recwp0IL4AFgF793w', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/laurent-palardy', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Laurent Palardy",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Laurent Palardy').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Laurent Palardy').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recboQhGEzk5lhxwZ', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/grace-paraluch', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Grace Paraluch",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Grace Paraluch').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Grace Paraluch').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recY2hqGfMqprWe9n', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/maya-pathak', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Maya Pathak",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Maya Pathak').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Maya Pathak').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recIaE6hhddcXgU7J', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/eric-paulino', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Eric Paulino",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Eric Paulino').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Eric Paulino').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recWHVTEabvxsg0Lv', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/zoe-pawlak', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Zoë Pawlak",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Zoë Pawlak').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Zoë Pawlak').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec2orReKLUg76jXR', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/marianne-pon-layus', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Marianne Pon-Layus",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Marianne Pon-Layus').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Marianne Pon-Layus').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recNdJQiqW9ckOn7Z', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/isobel-rae', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Isobel Rae",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Isobel Rae').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Isobel Rae').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recllzRucRWawt01S', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/claudia-rynkowski', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Claudia Rynkowski",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Claudia Rynkowski').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Claudia Rynkowski').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recbrzemKxIcnqG0W', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/anna-sadofsky', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Anna Sadofsky",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Anna Sadofsky').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Anna Sadofsky').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recahrJHxPi58UzMq', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/jessica-sallay-carrington', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Jessica Sallay-Carrington",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Jessica Sallay-Carrington').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Jessica Sallay-Carrington').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recCWezWtSw2BLcBX', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/emile-seguin', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Emile Seguin",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Emile Seguin').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Emile Seguin').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recZQSAvjR4kcJQKK', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/ariel-shea', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Ariel Shea",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Ariel Shea').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Ariel Shea').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec01s6SDyTb1tD4Q', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/kathryn-shriver', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Kathryn Shriver",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Kathryn Shriver').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Kathryn Shriver').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recsCw9vVyz53yI94', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/nicole-small', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Nicole Small",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Nicole Small').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Nicole Small').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recY0W0Yl1dQrl2U4', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/celia-spenard-ko', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Celia Spenard-Ko",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Celia Spenard-Ko').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Celia Spenard-Ko').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recr2i4kND8jfpEZP', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/emily-spooner', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Emily Spooner",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Emily Spooner').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Emily Spooner').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recdkIju2STot4iEA', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/jackie-stendel', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Jackie Stendel",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Jackie Stendel').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Jackie Stendel').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recmagON2AXzHcpyU', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/connie-sutera', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Connie Sutera",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Connie Sutera').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Connie Sutera').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec5CVGlJOP4GkYhx', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/jules-tomi', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Jules Tomi",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Jules Tomi').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Jules Tomi').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec6Y6DgkxMnzZsnv', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/sean-vadaru', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Sean Vadaru",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Sean Vadaru').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Sean Vadaru').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recmbeAg5rY83G7gu', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/andrea-wilkin', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Andrea Wilkin",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Andrea Wilkin').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Andrea Wilkin').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recCH5guzwnVHW0Wt', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/william-wilson', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "William Wilson",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('William Wilson').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('William Wilson').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recjaRldEPKGv8zvs', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/jade-wulfraat', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Jade Wulfraat",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Jade Wulfraat').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Jade Wulfraat').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recpTHBOnoPNzkQZ9', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/florence-yee', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Florence Yee",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Florence Yee').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Florence Yee').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recQK7ZlQqL1daSKe', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/janna-yotte', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Janna Yotte",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Janna Yotte').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Janna Yotte').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recQJvXz0CFeQevgO', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/jose-guillermo-garcia-sierra', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Jose Guillermo Garcia Sierra",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Jose Guillermo Garcia Sierra').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Jose Guillermo Garcia Sierra').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recTgzM7kbIe73jkW', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/olivia-turchyniak', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Olivia Turchyniak",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Olivia Turchyniak').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Olivia Turchyniak').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recWwQhbsiDADZ0u2', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/stefanie-auger-roy', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Stefanie Auger-Roy",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Stefanie Auger-Roy').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Stefanie Auger-Roy').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rechPWbo7KbueysEG', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/sara-leila-dumont', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Sara-Leila Dumont",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Sara-Leila Dumont').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Sara-Leila Dumont').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec81GhBrOORNgJAg', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/katherine-parthimos', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Katherine Parthimos",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Katherine Parthimos').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Katherine Parthimos').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recnzhKQVhU3dRdAy', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/mary-mulderry-macisaac', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Mary Mulderry MacIsaac",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Mary Mulderry MacIsaac').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Mary Mulderry MacIsaac').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recSQBpEHpU9GYxde', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/zeesun-haque', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Zeesun Haque",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Zeesun Haque').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Zeesun Haque').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recjokYJeqbmOEyhk', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/mimi-owen', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "Mimi Owen",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('Mimi Owen').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('Mimi Owen').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('rec8Ae3tH16XatN0a', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });
    app.get('/artists/david-durham', function(req, res) {
        var Airtable = require('airtable');
        var base = new Airtable({
            apiKey: config.storageConfig.airtableAPIKey
        }).base(config.storageConfig.airtableBase);
        var context = {
            title: "David Durham",
            static_url: "https://s3.amazonaws.com/centerfold-website/",
            stripeAPIKey: config.storageConfig.stripeAPIKey
        };
        var getCollection = function(title) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: "{Full Name} = '" + title + "'"
                    })
                    .firstPage(function(err, homepageArt) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArt = homepageArt.map(function(homepageArt) {
                                return homepageArt['_rawJson']
                            });
                            resolve(jsonHomepageArt[0]['fields']['Artworks']);
                        }
                    });
            });
        }
        var getArtwork = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artworks')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, homepageArtworks) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonHomepageArtworks = homepageArtworks.map(function(homepageArtworks) {
                                return homepageArtworks['_rawJson']
                            });
                            resolve(jsonHomepageArtworks);
                        }
                    });
            });
        }
        var getArtists = function(filterStatement) {
            return new Promise(function(resolve, reject) {
                base('Artists')
                    .select({
                        view: "Grid view",
                        filterByFormula: filterStatement
                    })
                    .firstPage(function(err, artists) {
                        if (err) {
                            reject(err)
                        } else {
                            var jsonArtists = artists.map(function(artist) {
                                return artist['_rawJson']
                            });
                            resolve(jsonArtists);
                        }
                    });
            });
        }

        function constructFilterStatement(records) {
            var filterStatement = "OR("
            for (var i = 0; i < records.length; i++) {
                filterStatement = filterStatement + "RECORD_ID() = '" + records[i] + "'";
                if (i < records.length - 1) {
                    filterStatement = filterStatement + ',';
                }
            }
            filterStatement = filterStatement + ")";
            return filterStatement;
        }
        getCollection('David Durham').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result) {
                context['homepageArtworks'] = result;
                getCollection('David Durham').then(function(result) {
                    var filterStatement = constructFilterStatement(result);
                    getArtwork(filterStatement).then(function(result) {
                        context['artPageArtworks'] = result;
                        // Parse the list of all the artist's ids
                        var artistIDs = [];
                        for (var i = 0; i < result.length; i++) {
                            artistIDs[i] = result[i].fields.Artist[0];
                        }
                        var artPageArtistsFilterStatement = constructFilterStatement(artistIDs)
                        getArtists(artPageArtistsFilterStatement).then(function(result) {
                            for (var i = 0; i < context['artPageArtworks'].length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (result[j].id == context['artPageArtworks'][i].fields.Artist[0]) {
                                        context['artPageArtworks'][i].fields.Artist = result[j].fields['Full Name'];
                                    }
                                }
                            }
                            base('Artists').find('recvFs7vVZwbSiGqy', function(err, record) {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                //res.json(record);
                                console.log(record);
                                var artistRecord;
                                var record;
                                record['artistRecord'] = ar;
                            });
                            var ar;
                            console.log(context);
                            res.render('artists/artists.html', context, ar)
                        });
                    });
                });
            });
        });
    });


}
