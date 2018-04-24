$(document).ready(function(){

	$('span').click(function() {
	  var path = $(this).data('hastag');


    $('#grid img').each(function(){


      var number = Math.floor(Math.random()*18);

      $(this).attr('src', 'ImageColl/'+path+'/'+number+'.png');

    });
  });

});
