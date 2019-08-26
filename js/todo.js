var elements = ["Ir al banco"];
var elemntsComplete = [];

$(document).ready(function () {
    listUpdate();
    // Espera a que se haga cliuck en el boton añadir para añadir esto a la lista
    $('#ButtonAdd').click(function () {
        //Traer el valor del input EditText
        let editText = $('#EditText');
        let text = editText.val();
        if (!text.length) {
            alert('Ingresa datos!!!');
            return;
        }
        elements.push(text);
        listUpdate();
        editText.val('');

    });
});

function listUpdate() {
    var tbody = $('#TableToDo tbody');
    tbody.html('');
    for (let x in elements) {
        tbody.append('<tr>' +
            '<td class="edit-element" onclick="editElementText('+x+', this)">' + elements[x] + '</td>' +
            '<td>' +
            '<button class="btn btn-success button-complete" onclick="deleteRow('+x+')"><i class="fa fa-check"></i></button>' +
            '</td>' +
            '</tr>');
    }
}

function editElementText(index, td) {
    $(td).attr('onclick',false);

    $(td).html('<input type="text" value="'+elements[index]+'" onkeypress="updateElement(event, '+index+', this)">');

}

function updateElement(e, index, ref) {
    if (e.keyCode === 13) {
        elements[index] = $(ref).val();
        listUpdate();
    }
}

function deleteRow(index){
    elemntsComplete.push(elements[index]);
    elements.splice(index,1);
    listUpdate();
}
