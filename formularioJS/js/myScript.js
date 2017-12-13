$(document).ready(function() {
    $('#boton').on('click', function() {
        event.preventDefault();
        $('input, .notificacionNombre').html("");
        $('.notificacionMail').html("");
