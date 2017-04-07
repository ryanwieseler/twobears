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

    $('.nav a').on('click', function(){
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
      $('#navbar').collapse('hide');
    });

    $(".navbar-nav li a[href^='#']").on('click', function(e) {
       // prevent default anchor click behavior
       e.preventDefault();

       // store hash
       var hash = this.hash;

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 300, function(){

           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = hash;
         });
     });

});
