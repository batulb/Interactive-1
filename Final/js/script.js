$(document).ready(function(){

  //$('.list span').hover(function(){
    //$('body').addClass('active');
  //})

  $(".list span").hover(function(){
        $(this).addClass("active");
        //}, function(){
        //$(this).attr('src', 'ImageColl/'+path+'/''background.png');
    });

	$('span').click(function() {
	  var path = $(this).data('hastag');


    $('#grid img').each(function(){


      var number = Math.floor(Math.random()*17) + 1;

      $(this).attr('src', 'ImageColl/'+path+'/'+number+'.png');

    });
  });

  $('body').click(function() {
     //alert('Are you sure? It is permanent');
     var y = window.prompt("How would you feel if someone posted the same photograph as you?")
     // window.alert(y)
     $('.cover').html(y);
    });

});
