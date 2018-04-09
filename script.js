(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);

$('.slipping a').click(function(){
       $('html, body').animate({scrollTop:$('#iphone').position().top}, 2000);
});

$('.slipping-two').click(function(){
       $('html, body').animate({scrollTop:$('#iphone').position().top}, 2000);
});

$('.slipping-three').click(function(){
       $('html, body').animate({scrollTop:$('#laptop').position().top}, 2000);
});


(function($) {
$(function() {

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},2000);
    return false;
  })

})
})(jQuery)
