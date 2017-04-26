
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

  $('.js-c-social-icon').on('click touchstart', function () {
    $('.js-c-social-icon').removeClass('c-icon-hover');
    $(this).addClass('c-icon-hover');
  });

};


// modal open/close
$('.js-c-prizes-link').click( function(event){
  event.preventDefault();
  $('.c-overlay').fadeIn(200,
    function(){
    if(window.matchMedia('(min-width: 769px)').matches) {
    $('.js-c-modal-prize').css('display', 'block').animate({opacity: 1, top: '15vw'}, 300);
    }	else if(window.matchMedia('(max-width: 768px)').matches) {
    $('.js-c-modal-prize').css('display', 'block').animate({opacity: 1, top: '100vw'}, 300);
    $('.js-c-modal-prize').css('overflow', 'auto');
    }
   });
});
$('.js-c-close-prize, .c-overlay').click( function(){
  $('.js-c-modal-prize')
    .animate({opacity: 0, top: '20px'}, 200,
      function(){
        $(this).css('display', 'none');
        $('.c-overlay').fadeOut(400);
      }
    );
});

//form inputs
$('.js-c-form input').change(function(){
    tmpval = $(this).val();
    if(tmpval == '') {
        $(this).removeClass('input-ok');
    } else {
        $(this).addClass('input-ok');
    }
});


// registration

$('.js-c-photo').click( function(event){
  event.preventDefault();
  $('.c-overlay').fadeIn(200,
    function(){
    if(window.matchMedia('(min-width: 769px)').matches) {
    $('.js-c-modal-reg').css('display', 'block').animate({opacity: 1, top: '22vw'}, 300);
    }	else if(window.matchMedia('(max-width: 768px)').matches) {
    $('.js-c-modal-reg').css('display', 'block').animate({opacity: 1, top: '150vw'}, 300);
    $('.js-c-modal-reg').css('overflow', 'auto');
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

$('#jsForm1').submit(function(e){
  e.preventDefault();
  var m_method=$(this).attr('method');
  var m_action=$(this).attr('action');

  var m_data=$(this).serialize();

    $.ajax({
      type: m_method,
      url: m_action,
      data: m_data,

      success: function(result){
        $('.js-c-modal-reg').css('display', 'none');
        $('.js-c-modal-photo').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
      }
    });
  });

  // form 2
  $('#jsForm2').submit(function(e){
  e.preventDefault();
  var m_method=$(this).attr('method');
  var m_action=$(this).attr('action');

  var m_data=$(this).serialize();

    $.ajax({
      type: m_method,
      url: m_action,
      data: m_data,

      success: function(result){
        $('.js-c-modal-photo').css('display', 'none');
        $('.js-c-modal-final').css('display', 'block').animate({opacity: 1, top: '40px'}, 300);
      },
      error: function(result) {
        //Если ошибка
      }
    });
  });
