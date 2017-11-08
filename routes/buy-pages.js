module.exports = function(app) {

    app.get('/art/CF000001', function (req, res) {
      res.render('art/buy/CF000001.html', {title: "Art 1", static_url: "https://s3.amazonaws.com/centerfold-website/"});
    });

}
