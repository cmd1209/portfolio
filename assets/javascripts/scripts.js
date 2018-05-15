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

  var startbutton = $('#start-button');

  startbutton.on( "click", function() {
    $('.splash-text').addClass('offscreen');
    $('.splash-container').delay(500).fadeOut(300);
   });

    $('.form .inputwrap input').focusout(function(){
      var text_val = $(this).val();
      if(text_val === ""){
        $(this).removeClass('has-value');
      }
      else{
        $(this).addClass('has-value');
      }
      
    });

  var projectwrapper = $(this).find('.project-wrapper');

  talent.mouseenter(function(){
    $(this).find('.project').fadeIn();
    // $(this).find('.guide').fadeTo("fast",0.3);
    $(this).find('.project').addClass('project-animation');
    $('.talent').not(this).each(function(){
         $(this).fadeTo("fast", 0.2);
     });
  });
  talent.mouseleave(function(){
    // $(this).find('.guide').fadeTo("fast",0);
    $(this).find('.project').removeClass('project-animation');
    $(this).find('.project').fadeOut();
    $('.talent').not(this).each(function(){
         $(this).fadeTo("fast", 1);
     });
  });



  talent1.mouseover(function(){
    $(".site-logo").addClass("outoftheway");
  });
  talent1.mouseout(function(){
    $(".site-logo").removeClass("outoftheway");
  });

  $("#owl-demo").owlCarousel({
    autoPlay : 3000,
        stopOnHover : true,
        navigation:false,
        pagination:false,
        paginationSpeed : 1000,
        goToFirstSpeed : 2000,
        singleItem : true,
        autoHeight : true,
  });


});