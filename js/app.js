$(document).ready(function () {

    // GUARDAR DATOS DEL FORM EN LA DB

    $('.formulario').submit(function (e) {
        e.preventDefault();
        let correo = $('#correo').val();
        let nombre = $('#nombre').val();
        let clave = $('#clave').val();

        $.ajax({
            url: "php/guardarRegistros.php",
            type: "POST",
            data: { correo, nombre, clave },
            success: function (response) {
                console.log(response);
            }
        });

    });
    // MENU DESPLEGABLE
    $('.navBar #botonMe').click(function (e) {
        if ($(window).width() < 650) {
            if ($('.navBar input').is(':checked')) {
                $('.navBar ul').animate({
                    'margin': 0
                }, 1000);
            } else {
                $('.navBar ul').animate({
                    'margin-left': '-200%'
                }, 1000);
            }
        }
    });

    // SLIDER
    let auto=1;
    let div = $('.divContedor');
    $('div[class=divsIndividuales]:last').insertBefore('div[class=divsIndividuales]:first');
    div.css({ left: '-100%' });

    //botÓn izquierdo
    $('.flechaLeft').click((e) => {
        div.animate({
            left: '0'
        }, 900, function () {
            $('div[class=divsIndividuales]:last').insertBefore('div[class=divsIndividuales]:first');
            div.css({ left: '-100%' });
        });
        auto = 0;
    });

    // BOTÓN DERECHA

    $('.flechaRight').click((e) => {
        div.animate({
            left: '-200%'
        }, 900, function () {
            $('div[class=divsIndividuales]:first').insertAfter('div[class=divsIndividuales]:last');
            div.css({ left: '-100%' });
        });
        auto = 0;
    });

    //Animación auto

    setInterval(() => {
        auto++;
        if (auto > 1) {
            div.animate({
                left: '-200%'
            }, 900, function () {
                $('div[class=divsIndividuales]:first').insertAfter('div[class=divsIndividuales]:last');
                div.css({ left: '-100%' });
            });
        }
    }, 3000);
});