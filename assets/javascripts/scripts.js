$( document ).ready(function() {

  var talent1 = $('.talent-1');
  var talent2 = $('.talent-2');
  var talent3 = $('.talent-3');
  var talent4 = $('.talent-4');
  var talent = $(".talent");
  var project = $(".project");

  // talent1.mouseover(function(){
  //   $(this).children('.typed').typed({
  //     strings: ["Hello There Friends! This is a Machine Typing."],
  //     typeSpeed: 0
  //   });
  // });
  // talent2.mouseover(function(){
  //   $(this).children('.typed').typed({
  //     strings: ["talent two to too baby"],
  //     typeSpeed: 0
  //   });
  // });
  // talent3.mouseover(function(){
  //   $(this).children('.typed').typed({
  //     strings: ["yes baby yes baby yes yes"],
  //     backDelay: 750,
  //     typeSpeed: 0
  //   });
  // });
  // talent4.mouseover(function(){
  //   $(this).children('.typed').typed({
  //     strings: ["boogie boogie boogie boogie"],
  //     typeSpeed: 0
  //   });
  // });

  var projectwrapper = $(this).find('.project-wrapper');

  talent.mouseenter(function(){
    $(this).find('.project').fadeIn();
    $(this).find('.project').addClass('project-animation');
    $('.talent').not(this).each(function(){
         $(this).fadeTo("fast", 0.2);
     });
  });
  talent.mouseleave(function(){
    $(this).find('.project').removeClass('project-animation');
    $(this).find('.project').fadeOut();
    $('.talent').not(this).each(function(){
         $(this).fadeTo("fast", 1);
     });
  });



  talent1.mouseover(function(){
    $(".site-header").addClass("outoftheway");
  });
  talent1.mouseout(function(){
    $(".site-header").removeClass("outoftheway");
  });

  $("#owl-demo").owlCarousel({

        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

  });


});
