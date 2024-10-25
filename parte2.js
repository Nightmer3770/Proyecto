function añadir() {
    var tareaInput = document.getElementById("nuevastareas");
    var tarealista = document.getElementById("listatareas");
    var listacompleta = document.getElementById("completas"); 
    if (tareaInput.value == "") {
        alert("Por favor, ingrese una tarea");
        return;
    }

    var listaobjeto = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onclick = function () {
        if (checkbox.checked) {
            listaobjeto.classList.add("completas");
            listacompleta.appendChild(listaobjeto); 
        } else {
            listaobjeto.classList.remove("completas");
            tarealista.appendChild(listaobjeto); 
        }
    };

    var Texto = document.createElement("li");
    Texto.textContent = tareaInput.value;

    listaobjeto.appendChild(checkbox);
    listaobjeto.appendChild(Texto);
    tarealista.appendChild(listaobjeto); 

    tareaInput.value = ""; 
}

function borrarlista() {
    var tarealista = document.getElementById("listatareas");
    var listacompleta = document.getElementById("completas");
    tarealista.innerHTML = ""; 
    listacompleta.innerHTML = ""; 
}
