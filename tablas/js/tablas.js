$(document).ready(function(){
	$('.boton').on('click',funcition(){
		var btnld = $(this).prop('id');
		var trld = "#registro_" + btnld;
		$(trld).hide();
	})

})



$('.btnEditar').on(click)