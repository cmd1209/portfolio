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




  talent.mouseenter(function(){
    $(this).find('.project-wrapper').addClass('project-visible');
    // $(this).find('.project-title').delay( 400 ).fadeIn( 250 );
    $(this).find('.project-background').delay( 400 ).fadeIn( 250 );
  });
  talent.mouseleave(function(){
    $(this).find('.project-wrapper').removeClass('project-visible');
    // $(this).find('.project-title').fadeOut(200);
    $(this).find('.project-background').fadeOut(200);
  });



  talent1.mouseover(function(){
    $(".site-header").addClass("outoftheway");
  });
  talent1.mouseout(function(){
    $(".site-header").removeClass("outoftheway");
  });






});
