$(function() {


var items = [];

$.getJSON('https://api.myjson.com/bins/ocmlr', function(data) {
   $.each(data.items, function(i, f) {
      var art = "<div class='art' id='art" + f.uniqueid + "'>" + "<div class='art-art'>" + "<img " + "class='b-lazy shadow' src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== data-src='https://s3.amazonaws.com/centerfold-website/" + f.uniqueid + "-large.jpg'>" + "</div>" + "<div class='artist-card-wrap'>" + "<div class='artist-card' id='card" + f.uniqueid + "'>" + "<span class='art-title'>" + f.title + "</span><br/>" + f.artist + "<br/>" + f.arttype + "<br/>" + f.width + "&quot; x " + f.height + "&quot;<br/>" + f.valuedollars + " &mdash; <span class='buy-2d'>Buy</span></div></div></div>"

      var buy = "<div class='buy' id='buy" + f.uniqueid + "'>" + "<div class='close'>Back</div>" + "<div class='close-full'>" + "</div>" + "<div class='buy-flex'>" + "<div class='buy-wrap'>" + "<div class='buy-art shadow'>" + "<img src='https://s3.amazonaws.com/centerfold-website/" + f.uniqueid + "-large.jpg" + "' data-action='zoom'>" + "</div>" + "<div class='buy-artist-card-wrap'>" + "<div class='buy-artist-card'>" + "<span class='buy-art-title'>" + f.title + "</span>" + "<br/>" + "<span class='buy-art-artist'>" + f.artist + "</span>" + "<br/><br/><br/>" + f.arttype + "<br/>" + f.width + "&#34; x " + f.height + "&#34;" + "<br/>" + f.valuedollars + "<br/><br/>" + "<form action='https://centerfold-gallery.herokuapp.com/' method='POST'>" + "<script src='https://checkout.stripe.com/checkout.js' class='stripe-button' data-key='pk_live_XepHFzcvrSK1Qf1TpJubSGlp' data-name='Centerfold Gallery' data-description='" + f.title + "&mdash;" + f.artist + "' data-amount='" + f.valuecents + "'></script>" + "<input name='amount' value='" + f.valuecents + "' type='hidden'><input name='description' value='" + f.title + "&mdash;" + f.artist + "' type='hidden'></form>" + "</div>" + "</div>" + "</div>" + "</div>" + "</div>"

      $(art).appendTo(".everything");
      $(buy).appendTo("body");
      var bLazy = new Blazy({
            container: ".everything"
        ,	loadInvisible: true
        });

      $(function () {
            $("[id^=artCF]").click(function () {
                var num = this.id.slice(5);
                var $elem = $('#buyCF'+num);
                $elem.fadeIn(500);
            });
      });
      $("[id^=artCF]").hover(function(){
          var num = this.id.slice(5);
          var $elemcard = $('#cardCF'+num);
          $elemcard.fadeIn(500);
      },function(){
          var num = this.id.slice(5);
          var $elemcard = $('#cardCF'+num);
          $elemcard.fadeOut(500);
      });
      $(".close").click(function () {
          $(".buy").fadeOut(500);
      });
      $(".close-full").click(function () {
          $(".buy").fadeOut(500);
      });
 });

});

});
