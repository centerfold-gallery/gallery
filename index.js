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
app.use('/assets', express.static('assets'))

// Setup Mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');


// Page Routes
app.get('/', function (req, res) {
  res.render('index.html', {});
});
app.get('/#', function (req, res) {
  res.render('index.html', {});
});

app.get('/events', function (req, res) {
    context = {title: "Events"};

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
  res.render('services/index.html', {title: "Services"});
});

app.get('/about', function (req, res) {
  res.render('about/index.html', {title: "About"});
});


app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
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
  console.log('Centerfold app listening on port ' + port)
})