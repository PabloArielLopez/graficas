//var a = ['a', 'b', 'c'];
/*var variable = {
    a: 'esto es a',
    b: {
        'b1': true,
        b2: 0.14
    },
    c: [9, 8 ,7]
};*/
/*
for (let x in a){
    console.log(x);
}*/

/*
    let aboutText = $('.about-text');

    aboutText.click(hola);

    aboutText.hover(function(){
        $(this).text('deja de mirarme o te denuncio')
    });

    $('.header-title').click(function(){
        let input = prompt('Seguro que deseas denunciarlo?');
        if (input){
            aboutText.text(input+' denunciado');
        }else{
            alert('marica');
        }
    });*/
function hola(){
    $(this).text('Denunciado')
    setTimeout(function(){
        alert('Capo');
    }, 3000);
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            console.log(e);
            $('.profile-image').attr('src', e.target.result);
        };

        console.log('antes de la E');
        reader.readAsDataURL(input.files[0]);
    }
}

function validate(input) {


}

$(document).ready(function(){
    $('form').submit(function () {
        return false;
    });
    $("#imgInp").change(function() {
        readURL(this);
    });
    $('.profile-image').click(function(){
        $('#imgInp').trigger('click');
    });

    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');

    })





    $('button[type=submit]').click(function () {
        alert('Enviado');
    })

    $('#exampleInputEmail1').change(function () {
        validate($(this));
    })
















});

