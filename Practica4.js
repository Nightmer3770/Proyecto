function enviar(){
    x = document.getElementById("calificaciones").value;
    if (x>= 0 && x<6){
        x= "Tu calificación es de: NA ";
    }
    else if (x>= 6 && x<7.5){
        x= "Tu calificación es de: S ";
    }
    else if (x>= 7.5 && x<9){
        x= "Tu calificación es de: B ";
    }
    else if (x>= 9 && x<10){
        x= "Tu calificación es de: MB ";
    }
    else if (x == 10){
        x= "Tu calificación es de: LAP ";
    }
    else {
        x = "No es valido tu calificación ingresada";
    }

    
    document.getElementById("resultadocalif").innerHTML = x;
}

function factorial_Recursivo(x) {
    if (x == 0 || x == 1) {
        return 1;
    }
    return x * factorial_Recursivo(x - 1);
}

function factoriall() {
    y = document.getElementById("num").value;
    x = parseInt(y);

    if (x < 0) {
        resultado = "El " + x + " no está definido";
    }
    else {
        f = factorial_Recursivo(x); 
        resultado = x + " ! = " + f;
    }

    document.getElementById("resultadofacto").innerHTML = resultado;
}

function registrousuarios(){
    x = "Hola "+ document.getElementById("nombre").value;
    x = x + "  , su correo es: "+ document.getElementById("correo").value;
    x = x + " , su edad es de : " +document.getElementById("edad").value;
    if (document.getElementById("Hombre").checked){
        x = x +", se identifica como hombre";
    }   
    else if(document.getElementById("Mujer").checked){
        x = x + ", se identifica como mujer";
    }
    else if(document.getElementById("No binario").checked){
        x = x + ", se identifica comoLGBTI+";
    }
    x = x + ", la fecha en que nacio es: " +document.getElementById("fecha").value;
    x = x + ", su color favorito es: "+ document.getElementById("color").value;


    document.getElementById("resultadousuario").innerHTML = x;

}