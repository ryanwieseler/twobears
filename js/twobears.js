$(document).ready(function() {
  $(window).on('load', function() {
    $("#aboutus-tbg").css("height", $("#about-us").height());
    $("#engagement-tbg").css("height", $("#our-engagement").height());
    $("#registry").css("height", $(window).height());
  })

  $(window).resize(function() {
    var aboutusheight = $("#about-us").height();
    $("#aboutus-tbg").css("height", aboutusheight);
    var ourengagement = $("#our-engagement").height();
    $("#engagement-tbg").css("height", ourengagement);
  })

  $('.nav a').on('click', function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    $('#navbar').collapse('hide');
    console.log('hello, wies');
  });

  $(".navbar-nav li a[href^='#'], .pocket a").on('click', function(e) {
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

  $(document).scroll(function(){
    var el = $('.bear-icon'),
        top = $('#our-wedding').offset().top - $(document).scrollTop();
    if (top < 100){
        $(el).addClass('in-view');
    }
    if (top > 100){
        $(el).removeClass('in-view');
    }
  });
});
