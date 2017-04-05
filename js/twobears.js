$(document).ready(function() {
  $("#aboutus-tbg").css("height", $("#about-us").height());

   $(window).resize(function() {
     var aboutusheight = $("#about-us").height();
     $("#aboutus-tbg").css("height", aboutusheight);
   })

   $("#engagement-tbg").css("height", $("#our-engagement").height());

    $(window).resize(function() {
      var ourengagement = $("#our-engagement").height();
      $("#engagement-tbg").css("height", ourengagement);
    })

});
