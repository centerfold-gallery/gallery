const express = require('express')
const app = express()
var path = require('path')

app.use('/js', express.static('js'))
app.use('/stylesheets', express.static('stylesheets'))
app.use('/assets', express.static('assets'))

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

app.listen(3000, function () {
  console.log('Centerfold app listening on port 3000.')
})