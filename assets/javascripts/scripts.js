$( document ).ready(function() {

  var talent1 = $('.talent-1');
  var talent2 = $('.talent-2');
  var talent3 = $('.talent-3');
  var talent4 = $('.talent-4');


  talent1.mouseover(function(){
    $(this).children('.typed').stop().fadeIn('fast').typed({
      strings: ["Hello There Friends! This is a Machine Typing."],
      typeSpeed: 0
    });
  });
  talent2.mouseover(function(){
    $(this).children('.typed').stop().fadeIn('fast').typed({
      strings: ["talent two to too baby"],
      typeSpeed: 0
    });
  });
  talent3.mouseover(function(){
    $(this).children('.typed').stop().fadeIn('fast').typed({
      strings: ["yes baby yes baby yes yes", "yo yo this is <strong>good</strong>"],
      backDelay: 750,
      typeSpeed: 0
    });
  });
  talent4.mouseover(function(){
    $(this).children('.typed').stop().fadeIn('fast').typed({
      strings: ["boogie boogie boogie boogie"],
      typeSpeed: 0
    });
  });

  talent1.mouseout(function(){
    $(this).children('.typed').stop().fadeOut('slow');
  });
  talent2.mouseout(function(){
    $(this).children('.typed').stop().fadeOut('slow');
  });
  talent3.mouseout(function(){
    $(this).children('.typed').stop().fadeOut('slow');
  });
  talent4.mouseout(function(){
    $(this).children('.typed').stop().fadeOut('slow');
  });



  talent1.mouseover(function(){
    $(".site-header").addClass("outoftheway");
  });
  talent1.mouseout(function(){
    $(".site-header").removeClass("outoftheway");
  });




});
