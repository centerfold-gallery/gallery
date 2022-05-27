module.exports = function(app) {

    app.get('/gallery/arrival-measures', function (req, res) {
      res.render('gallery/zoe/dinner.html', {title: "Arrival Measures", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.process.envfig.stripeAPIKey});
    });

    app.get('/gallery/arrival-measures/press', function (req, res) {
      res.render('gallery/zoe/press.html', {title: "Press, Arrival Measures", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.process.envfig.stripeAPIKey});
    });

    app.get('/gallery/arrival-measures/preview', function(req, res){
        var context = {title: "Buyer Preview, Arrival Measures", static_url: "https://s3.amazonaws.com/centerfold-website/", stripeAPIKey: config.process.envfig.stripeAPIKey};

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

        getCollection('Arrival Measures').then(function(result) {
            var filterStatement = constructFilterStatement(result);
            getArtwork(filterStatement).then(function(result){
                context['homepageArtworks'] = result;
                getCollection('Arrival Measures').then(function(result){
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
                            res.render('gallery/zoe/buy.html', context);
                        });
                    });
                });
            });
        });
    });

}
