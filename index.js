const express = require('express')
const app = express()
var path = require('path')
var config = require('./config');

// Airtable Configuration
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: config.storageConfig.airtableAPIKey,
});
var base = Airtable.base('app5Q0PlJanbLMzkB');


// Static Asset Routes
app.use('/js', express.static('js'))
app.use('/stylesheets', express.static('stylesheets'))
app.use('/assets', express.static('assets'))


// Page Routes
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/services', function (req, res) {
  res.sendFile(path.join(__dirname + '/services/index.html'))
})

app.get('/events', function (req, res) {
  res.sendFile(path.join(__dirname + '/events/index.html'))
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/about/index.html'))
})


// Airtable Queries
base('Events').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record);
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