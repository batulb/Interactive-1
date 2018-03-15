$(document).ready(function(){
  //
  // $('.item').click(function() {
  //   $(this).removeClass('show');
  //   $(this).next('.item').addClass('show');
	// });

  $('.refresh').click(function(){
    $('#impatient').show();
    $('#progress').hide();

    $('.final').html(per);

  });

  var per = 3;
  var n = 1;

  // loop through each element with the class 'item' in order

  $('.item').each(function(i) {

    // set the current element with class 'item' as a variable
    var item = $(this);

    if (n < 31) {
      console.log(n);
      // every x seconds, do this function
      setTimeout( function(){

        // use the item variable, or the current 'item'
        $(item).removeClass('show');
        $(item).next('.item').addClass('show');
        per = per + 3;
        // $('.percent').html(per);
        // adjust 5000 to make it go faster or slower
      }, i * 25000);
    }

    n++;
  });

  // var down = 0;
  // // every x seconds, do this function
  // setTimeout( function(){
  //   down = down + 3;
  //   $('#down').html(down);
  // }, 600);


});
