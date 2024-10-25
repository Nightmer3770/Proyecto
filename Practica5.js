var registro = "";
var estilo = 0;
var encabezadosAgregados = false; 
function procesoradios() {
  var x = document.querySelector('input[name="precio"]:checked');
  var y = document.getElementById("resultado");
  var cad = "";

  if (x) {
    cad = "<p>" + x.value + "</p>";
    y.innerHTML = cad;
    return x.value;
  } else {
    return null;
  }
}

function procesochechbox() {
  var x = document.getElementsByName("Automoviles");
  var y = document.getElementById("resultado");
  var cad = "";
  var autos = [];

  for (let i of x) {
    if (i.checked) {
      autos.push(i.value);
    }
  }

  y.innerHTML = cad;

  return autos;
}
function registrar() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var precioseleccionado= procesoradios();
  var marcaseleccionadas = procesochechbox();
  var fechahora = document.getElementById("fechahora").value;
  var color = document.getElementById("color").value;
  var calificacion = document.getElementById("añosdeuso").value;

  if (!nombre) {
    alert("Debe llenar el campo de nombre");
  } else if (!email) {
    alert("Debe llenar el campo de correo");
  } else if (marcaseleccionadas.length === 0) {
    alert("Debes seleccionar al menos una marca.");
    return;
  } else if (!precioseleccionado) {
    alert("Debes seleccionar un precio.");
    return;
  } else if (!fechahora) {
    alert("Debe llenar el campo de fecha y hora");
  } else if (!color) {
    alert("Debe llenar el campo del color");
  } else if (!calificacion) {
    alert("Debe llenar el campo de calificación");
  } else {
    if (!encabezadosAgregados) {
      registro += "<tr><th>Nombre</th><th>Correo</th><th>Marca(s)</th><th>Precio</th><th>Fecha de registro </th><th> Color </th><th> Años de uso</th></tr>";
      encabezadosAgregados = true; 
    }

    var nuevoRegistro = "";

    if (estilo % 2 == 0) {
      nuevoRegistro = "<tr class=\"renglon1\">";
    } else {
      nuevoRegistro = "<tr class=\"renglon2\">";
    }

    nuevoRegistro += "<td>" + nombre + "</td>";
    nuevoRegistro += "<td>" + email + "</td>";
    nuevoRegistro += "<td>" + marcaseleccionadas.join(", ") + "</td>";
    nuevoRegistro += "<td>" + precioseleccionado + "</td>";
    nuevoRegistro += "<td>" + fechahora + "</td>";
    nuevoRegistro += "<td>" + color + "</td>";
    nuevoRegistro += "<td>" + calificacion + "</td>";


    nuevoRegistro += "</tr>";

    registro += nuevoRegistro; 

    document.getElementById("Tablaautomoviles").innerHTML = registro; 

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Volkswagen").checked = false;
    document.getElementById("Nissan").checked = false;
    document.getElementById("Chevrolet").checked = false;
    document.getElementById("bajo").checked = false;
    document.getElementById("medio").checked = false;
    document.getElementById("alto").checked = false;
    document.getElementById("fechahora").value = "";
    document.getElementById("color").value = "";
    document.getElementById("añosdeuso").value = "";

    estilo = estilo + 1;
  }
}