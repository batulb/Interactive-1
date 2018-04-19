$(document).ready(function(){

	$('body').click(function() {
	   color = $(this).html();
	   //alert('Are you sure? It is permanent');
     var y=window.prompt("Are you sure? This is permanent. What is your reason?")
     // window.alert(y)
     $('body').append('<div class="break">'+y+'</div>');
    });

});
