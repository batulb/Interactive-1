$(document).ready(function(){
  $('.item').click(function() {
    $(this).removeClass('show');
    $(this).next('.item').addClass('show');
	});
});
