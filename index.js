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

app.get('/events', function (req, res) {
  res.render('events/index.html', {title: "Events"});
});

app.get('/services', function (req, res) {
  res.render('services/index.html', {title: "Services"});
});

app.get('/about', function (req, res) {
  res.render('about/index.html', {title: "About"});
});

// Airtable Queries
base('Events').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        //console.log('Retrieved', record);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});


app.listen(3000, function () {
  console.log('Centerfold app listening on port 3000.')
})