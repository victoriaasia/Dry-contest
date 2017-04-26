
$('.js-c-items li').on('click mouseenter', function () {
  var tab_id = $(this).attr('data-tab');
  $('.js-c-items li').removeClass('current');
  $('.js-c-content').removeClass('current');
  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
});

if(window.matchMedia('(min-width: 769px)').matches) {
  $('.js-c-items li').on('click mouseenter', function () {
    var tab_id = $(this).attr('data-tab');
    $('.js-c-items li').removeClass('current');
    $('.js-c-content').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });
}	else if(window.matchMedia('(max-width: 768px)').matches) {
  $('.js-c-content').on('click touchstart', function () {
    $('.js-c-content').removeClass('current');
    $(this).addClass('current');    
  });

};


// modal open/close
$('.js-c-prizes-link').click( function(event){
  event.preventDefault();
  $('.c-overlay').fadeIn(200,
    function(){
    if(window.matchMedia('(min-width: 769px)').matches) {
    $('.js-c-modal').css('display', 'block').animate({opacity: 1, top: '15vw'}, 300);
    }	else if(window.matchMedia('(max-width: 768px)').matches) {
    $('.js-c-modal').css('display', 'block').animate({opacity: 1, top: '100vw'}, 300);
    // $('body').css('overflow', 'hidden');
    $('.js-c-modal').css('overflow', 'auto');
    }
   });
});
$('.js-c-close, .c-overlay').click( function(){
  $('.js-c-modal')
    .animate({opacity: 0, top: '20px'}, 200,
      function(){
        $(this).css('display', 'none');
        $('.c-overlay').fadeOut(400);
      }
    );
});
