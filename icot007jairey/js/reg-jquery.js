$(document).ready(function(){
  $('#sign-in').on('click', function(){
    $('#reg-form1').removeClass('reg-active').addClass('reg-hide');
    $('#sign-in-form').removeClass('reg-hide invisible').addClass('reg-active');
  });
  $('#sign-in2').on('click', function(){
    $('#reg-form2').removeClass('reg-active').addClass('reg-hide');
    $('#sign-in-form').removeClass('reg-hide invisible').addClass('reg-active');
  });
  $('#sign-in3').on('click', function(){
    $('#reg-form3').removeClass('reg-active').addClass('reg-hide');
    $('#sign-in-form').removeClass('reg-hide invisible').addClass('reg-active');
  });
  $('#sign-up').on('click', function(){
    $('#sign-in-form').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form1').removeClass('reg-hide invisible').addClass('reg-active');
  });
  $('#sign-up2').on('click', function(){
    $('#reg-form1').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form2').removeClass('reg-hide invisible').addClass('reg-active');
  });
  $('#continue').on('click', function(){
    $('#reg-form2').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form3').removeClass('reg-hide invisible').addClass('reg-active');
  });
  $('#back').on('click', function(){
    $('#reg-form2').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form1').removeClass('reg-hide invisible').addClass('reg-active');
  });
  $('#back2').on('click', function(){
    $('#reg-form3').removeClass('reg-active').addClass('reg-hide');
    $('#reg-form2').removeClass('reg-hide invisible').addClass('reg-active');
  });
});
