$(document).ready(function(){

  //$('.list span').hover(function(){
    //$('body').addClass('active');
  //})

  $(".list span").hover(function(){
      var background = $(this).data('hastag');
      var numbers = $(this).data('numbers');
          $('#background').addClass(background);
          $('#numbers').html(numbers);
        }, function(){
      var background = $(this).data('hastag');
          $('#background').removeClass(background);
          $('#numbers').html('');
    });



	$('span').click(function() {
	  var path = $(this).data('hastag');


    $('#grid img').each(function(){


      var number = Math.floor(Math.random()*17) + 1;

      $(this).attr('src', 'ImageColl/'+path+'/'+number+'.png');

    });
  // });
  //
  // $('body').click(function() {
     //alert('Are you sure? It is permanent');
     var y = window.prompt("How would you feel if someone posted the same photograph as you?")
     // window.alert(y)
     $('.cover').html(y);
     //window.print();
    });

  $blocks.each(function(i, elm) {
  $(elm).fadeOut(200, function() {
  $(elm).remove();
 });
}).promise().done( function(){ alert("All was done"); } );

});
