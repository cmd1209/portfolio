$( document ).ready(function() {

  var talent = $('.talent');


  talent.mouseover(function(){
    $(this).find('.typed').stop().fadeIn('fast').typed({
      strings: ["Hello There Friends! This is a Machine Typing."],
      typeSpeed: 0
    });
  });
  talent.mouseout(function(){
    $(this).find('.typed').stop().fadeOut('slow');
  });


});
