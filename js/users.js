const URL = 'http://localhost:3000/usuarios';
var users = [];
$(document).ready(function () {
    getUsers();

    $('#CreateUser').submit(() => {
        let nombreInput = $('#exampleInputName');
        let apellidoInput = $('#exampleInputApellido');
        let nombre = nombreInput.val();
        let apellido = apellidoInput.val();

        if(!nombre.length){
            alert("Ingrese un nombre");
            return;
        }
        if(!apellido.length){
            alert("Ingrese un apellido");
            return;
        }

        let params = {
            nombre: nombre,
            apellido: apellido
        };

        setUsers(params);


    });

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 10, 10, 12, 13, 18]
            }]
        },

        // Configuration options go here
        options: {}
    });


});

function listUpdate() {
    // TRae los usuarios de la api
    var tbody = $('#TableToDo tbody');
    tbody.html('');
    for (let x in users) {
        tbody.append('<tr>' +
            '<td class="edit-element">' + users[x]["nombre"] + '</td>' +
            '<td class="edit-element">' + users[x]["apellido"] + '</td>' +
            '<td class="edit-element">' +
                '<button class="btn btn-primary" onclick="edit('+x+');">Modificar</button>' +
                '<button class="btn btn-danger" onclick="remove('+x+');">Eliminar</button>' +
            '</td>' +
            '</tr>');
    }
}

function edit(index) {

}

function remove(index) {
    //DELETE
    let success = confirm("Press a button!");
    if(success){

        $.ajax({ url: URL, method: "DELETE" })
            .then(function (data) {

            })
            .catch(function (err) {

            });

        $.ajax({
            url: URL,
            type: 'DELETE',
            async: true,
            success: (resp) => {
                if(resp.error === true){
                    alert('Error: '+resp.mensaje);
                    return;
                }
                alert("Se elimino correctamente");
                listUpdate();
            }
        });

    }
    return;
}

function setUsers(params) {
    //POST
    $.post(URL, params, (resp) => {
        if(resp.error === true){
            alert('Error: '+resp.mensaje);
            return;
        }
        alert("Se creo correctamente");
        listUpdate();
    });
}

function f() {
    $.ajax({
        beforeSend:textreplace(description),
        type: "POST",
        url: "updatedjob.php",
        data: "jobID="+ job +"& description="+ description +"& startDate="+ startDate +"& releaseDate="+ releaseDate +"& status="+ status,
        success: function(){
            $("form#updatejob").hide(function(){$("div.success").fadeIn();});
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    });
}

function getUsers() {
    //$.get
    $.get(URL, {results:20}, function(resp){
        if(resp.error === true){
            alert('Error: '+resp.mensaje);
            return;
        }
        for (row in resp.respuesta) {
            users.push({
                'nombre': resp.respuesta[row]['nombre'],
                'apellido': resp.respuesta[row]['apellido'],
            });
        }
        listUpdate();
    });
}
