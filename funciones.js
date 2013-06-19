var numdado,
        lugarjugador1,
        lugarjugador2,
        posicion,
        posicionRojo,
        posicionAzul,
        jugadoractual,
        mensaje,
        peonactual,
        preguntas,
        respuestas,
        respcorrecta;

var jugadores = [];

window.onload = iniciar;

function iniciar() {
    $(peonAzul).animate({top: '415px', left: '35px'}, 0);
    $(peonRojo).animate({top: '405px', left: '25px'}, 0);
    posicion = 0;
    numdado = 0;
    posicionRojo = 0;
    posicionAzul = 0;
    jugadoractual = "Jugador Azul";
    mensaje = "";
    peonactual = "peonAzul";
    mensajes.innerHTML = "";
    document.getElementById("jugadorAzul").innerHTML = "Jugador Uno";
    document.getElementById("jugadorRojo").innerHTML = "Jugador Dos";
    document.getElementById("log").style.display = "inline";
    document.getElementById("over").style.display = "inline";
    document.getElementById("comenzarJuego").onclick = comenzar;
    document.getElementById("mensajes").style.color = "blue";
    document.getElementById("rank").style.display = "none";
    generarRespuestas();
    generarPreguntas();
}

function comenzar() {
    if (nombreJugador1.value != nombreJugador2.value && nombreJugador1.value != "" && nombreJugador2.value != "") {
        document.getElementById("log").style.display = "none";
        document.getElementById("over").style.display = "none";
        document.getElementById("jugadorAzul").innerHTML = nombreJugador1.value;
        document.getElementById("jugadorRojo").innerHTML = nombreJugador2.value;
        agregarJugadores();
        document.getElementById("nombreJugador1").value = "";
        document.getElementById("nombreJugador2").value = "";
        document.getElementById("mensajes").innerHTML += jugadoractual + ", tire el dado <br />";
        document.getElementById("dado").onclick = tirardado;
        document.getElementById("reiniciarJuego").onclick = iniciar;
    }
    else {
        alert("Debe ingresar nombres para los jugadores, y que sean distintos");
    }
}

function tirardado() {
    numdado = Math.floor((Math.random() * 6 + 1));
    switch (numdado) {
        case 1:
            dado.src = "img/1.png";
            break;
        case 2:
            dado.src = "img/2.png";
            break;
        case 3:
            dado.src = "img/3.png";
            break;
        case 4:
            dado.src = "img/4.png";
            break;
        case 5:
            dado.src = "img/5.png";
            break;
        case 6:
            dado.src = "img/6.png";
            break;
    }
    mensajes.innerHTML += jugadoractual + " saco un " + numdado + "<br />";
    if (peonactual == "peonAzul") {
        efectuarAnimacion(peonAzul, posicionAzul, numdado, 1);
        posicionAzul += numdado;
        posicion = posicionAzul;
        
    } else {
        efectuarAnimacion(peonRojo, posicionRojo, numdado, 1);
        posicionRojo += numdado;
        posicion = posicionRojo;
    }
    hacerPregunta(posicion);
}
function cambiaturno() {
    if (jugadoractual == "Jugador Azul") {
        jugadoractual = "Jugador Rojo";
        peonactual = "peonRojo";
        mensajes.style.color = "red";
    }
    else {
        jugadoractual = "Jugador Azul";
        peonactual = "peonAzul";
        mensajes.style.color = "blue";
    }
    mensajes.innerHTML += jugadoractual + ", tire el dado <br />";
}
function hacerPregunta(posicion) {
    var tipopregunta = casilleros[posicion].tipo;
    var preg, respuesta1, respuesta2, respuesta3, respuesta4;
    var numeroPregunta = Math.floor((Math.random() * preguntas.length + 1));
    preg = preguntas[numeroPregunta][1];
    respuesta1 = respuestas[numeroPregunta][2];
    respuesta2 = respuestas[numeroPregunta][5];
    respuesta3 = respuestas[numeroPregunta][8];
    respuesta4 = respuestas[numeroPregunta][11];
    respcorrecta = preguntas[numeroPregunta][2];
    //$("#txtpregunta").text(preg);
    txtpregunta.innerHTML = preg;
    textoRespuesta1.innerHTML = respuesta1;
    textoRespuesta2.innerHTML = respuesta2;
    textoRespuesta3.innerHTML = respuesta3;
    textoRespuesta4.innerHTML = respuesta4;

    // Borrar pregunta para que no se haga de nuevo
    preguntas.splice(numeroPregunta, 1)
    respuestas.splice(numeroPregunta, 1)

    var tipo = "";
    document.getElementById("respuesta1").checked = false;
    document.getElementById("respuesta2").checked = false;
    document.getElementById("respuesta3").checked = false;
    document.getElementById("respuesta4").checked = false;
    switch (tipopregunta) {
        case "arroyo":
            mensajes.innerHTML += jugadoractual + " cayo en un arroyo, cruza al siguiente casillero <br />";
            arroyo();
            break;
        case"pradera":
            tittarj.innerHTML = "Pradera";
            mensajes.innerHTML += jugadoractual + " cayo en una pradera <br />";
            $(".cabezalTarjeta").css("background-color", "rgba(252,130,69,1)");
            document.getElementById("over").style.display = "block";
            document.getElementById("tarj").style.display = "block";
            document.getElementById("botonRespuesta").onclick = pradera;
            break;
        case "insecto":
            tittarj.innerHTML = "Insecto";
            mensajes.innerHTML += jugadoractual + " cayo en un insecto <br />";
            $(".cabezalTarjeta").css("background-color", "rgba(170,92,161,1)");
            document.getElementById("over").style.display = "block";
            document.getElementById("tarj").style.display = "block";
            document.getElementById("botonRespuesta").onclick = insecto;
            break;
        case "balsa":
            tittarj.innerHTML = "Balsa";
            mensajes.innerHTML += jugadoractual + " cayo en una balsa <br />";
            $(".cabezalTarjeta").css("background-color", "rgba(239,201,45,1)");
            document.getElementById("over").style.display = "block";
            document.getElementById("tarj").style.display = "block";
            document.getElementById("botonRespuesta").onclick = balsa;
            break;
        case "trampa":
            tittarj.innerHTML = "Trampa";
            mensajes.innerHTML += jugadoractual + " cayo en una trampa <br />";
            $(".cabezalTarjeta").css("background-color", "rgba(0,147,38,1)");
            document.getElementById("over").style.display = "block";
            document.getElementById("tarj").style.display = "block";
            document.getElementById("botonRespuesta").onclick = trampa;
            break;
        case "madriguera":
            mensajes.innerHTML += jugadoractual + " cayo en una madriguera, pierde el turno <br />";
            madriguera();
            break;
    }
}

function verificaRespuesta() {
    if (document.getElementById("respuesta1").checked == false && document.getElementById("respuesta2").checked == false && document.getElementById("respuesta3").checked == false && document.getElementById("respuesta4").checked == false) {
    }
    else {
        if (document.getElementById("respuesta1").checked == true)
            respelegida = 1;
        if (document.getElementById("respuesta2").checked == true)
            respelegida = 2;
        if (document.getElementById("respuesta3").checked == true)
            respelegida = 3;
        if (document.getElementById("respuesta4").checked == true)
            respelegida = 4;
        if (respelegida == parseInt(respcorrecta)) {
            document.getElementById("over").style.display = "none";
            document.getElementById("tarj").style.display = "none";
            return true;
        }
        else {
            document.getElementById("over").style.display = "none";
            document.getElementById("tarj").style.display = "none";
            return false;
        }
    }

}

function arroyo() {
    document.getElementById("over").style.display = "none";
    document.getElementById("tarj").style.display = "none";
    if (peonactual == "peonAzul") {
        efectuarAnimacion(peonAzul, posicionAzul, 1, 1);
        posicionAzul += 1;
        posicion = posicionAzul + 1;
        cambiaturno();
    }
    else {
        efectuarAnimacion(peonRojo, posicionRojo, 1, 1);
        posicionRojo += 1;
        posicion = posicionRojo + 1;
        cambiaturno();
    }
}

function pradera() {
    if (verificaRespuesta() == true) {
        cambiaturno();
    }
    if (verificaRespuesta() == false) {
        if (peonactual == "peonAzul") {
            if (posicionAzul < 2) {
                efectuarAnimacion(peonAzul, posicionAzul, -1, 0);
                posicionAzul -= 1;
                posicion = posicionAzul - 1;
            }
            else {
                efectuarAnimacion(peonAzul, posicionAzul, -2, 0);
                posicionAzul -= 2;
                posicion = posicionAzul - 2;
            }
        }
        else {
            if (posicionRojo < 2) {
                efectuarAnimacion(peonRojo, posicionRojo, -1, 0);
                posicionRojo -= 1;
                 posicion = posicionRojo - 1;
            }
            else {
                efectuarAnimacion(peonRojo, posicionRojo, -2, 0);
                posicionRojo -= 2;
                 posicion = posicionRojo - 2;
            }
        }
        cambiaturno();
    }
}

function insecto() {
    if (verificaRespuesta() == true) {
        if (peonactual == "peonAzul") {
            efectuarAnimacion(peonAzul, posicionAzul, 2, 1);
            posicionAzul += 2;
            posicion = posicionAzul + 2;

        }
        else {
            efectuarAnimacion(peonRojo, posicionRojo, 2, 1);
            posicionRojo += 2;
            posicion = posicionRojo + 2;

        }
        cambiaturno();
    }
    if (verificaRespuesta() == false) {
        cambiaturno();
    }
}

function balsa() {
    if (verificaRespuesta() == true) {
        cambiaturno();
    }
    if (verificaRespuesta() == false) {
        if (peonactual == "peonAzul") {
            if (posicionAzul < 2) {
                efectuarAnimacion(peonAzul, posicionAzul, -1, 0);
                posicionAzul -= 1;
                 posicion = posicionAzul - 1;
            }
            else {
                efectuarAnimacion(peonAzul, posicionAzul, -2, 0);
                posicionAzul -= 2;
                 posicion = posicionAzul - 2;
            }
        }
        else {
            if (posicionRojo < 2) {
                efectuarAnimacion(peonRojo, posicionRojo, -1, 0);
                posicionRojo -= 1;
                 posicion = posicionRojo - 1;
            }
            else {
                efectuarAnimacion(peonRojo, posicionRojo, -2, 0);
                posicionRojo -= 2;
                 posicion = posicionRojo - 2;
            }
        }
        cambiaturno();
    }
}

function trampa() {
    if (verificaRespuesta() == true) {
        if (peonactual == "peonAzul") {
            efectuarAnimacion(peonAzul, posicionAzul, 2, 1);
            posicionAzul += 2;
             posicion = posicionAzul + 2;
        }
        else {
            efectuarAnimacion(peonRojo, posicionRojo, 2, 1);
            posicionRojo += 2;
             posicion = posicionRojo + 2;
        }
        cambiaturno();
    }
    if (verificaRespuesta() == false) {
        if (peonactual == "peonAzul") {
            if (posicionAzul < 2) {
                efectuarAnimacion(peonAzul, posicionAzul, -1, 0);
                posicionAzul -= 1;
                 posicion = posicionAzul - 1;
            }
            else {
                efectuarAnimacion(peonAzul, posicionAzul, -2, 0);
                posicionAzul -= 2;
                 posicion = posicionAzul - 2;
            }
        }
        else {
            if (posicionRojo < 2) {
                efectuarAnimacion(peonRojo, posicionRojo, -1, 0);
                posicionRojo -= 1;
                 posicion = posicionRojo - 1;
            }
            else {
                efectuarAnimacion(peonRojo, posicionRojo, -2, 0);
                posicionRojo -= 2;
                 posicion = posicionRojo - 2;
            }
        }
        cambiaturno();
    }
}

function madriguera() {
    document.getElementById("over").style.display = "none";
    document.getElementById("tarj").style.display = "none";
    cambiaturno();
}

function generarPreguntas() {
    preguntas = [];
    var pregunta1 = "";
    pregunta1 = preguntasRaw.split("\n");
    for (var i = 0 in pregunta1) {
        var partepregunta = pregunta1[i].split("@");
        preguntas.push(partepregunta);
    }
}
function generarRespuestas() {
    respuestas = [];
    var respuesta1 = "";
    respuesta1 = respuestasRaw.split("\n");
    for (var i = 0 in respuesta1) {
        var partepregunta = respuesta1[i].split("@");
        respuestas.push(partepregunta);
    }
}


function asignarVictoria() {
    $(".cabezalTarjeta").css("background-color", "rgba(230,119,57,1)");
    dado.onclick = "";
    alert(jugadoractual);
    if (jugadoractual == "Jugador Azul") {
        jugadores[lugarjugador1]["puntaje"] += 1;
    }
    else {
        jugadores[lugarjugador2]["puntaje"] += 1;
    }
    tablaRanking.innerHTML = "<tr></tr>";
    for (var i = 0 in jugadores) {
        tablaRanking.innerHTML += "<tr><td>" + jugadores[i]["nombre"] + "</td><td>" + jugadores[i]["puntaje"] + "</td></tr>";
    }
    document.getElementById("over").style.display = "block";
    document.getElementById("rank").style.display = "block";
    return;
}
function agregarJugadores() {
    var verificarjugador1 = false;
    var verificarjugador2 = false;

    if (jugadores.length == 0) {
        var nuevoJugador1 = {'nombre': jugadorAzul.innerHTML, 'puntaje': 0};
        var nuevoJugador2 = {'nombre': jugadorRojo.innerHTML, 'puntaje': 0};
        jugadores[0] = nuevoJugador1;
        jugadores[1] = nuevoJugador2;
        lugarjugador1 = 0;
        lugarjugador2 = 1;
    }
    else {
        for (var i = 0 in jugadores) {
            if (jugadores[i]["nombre"] == nombreJugador1.value) {
                lugarjugador1 = i;
                verificarjugador1 = true;
            }
            if (jugadores[i]["nombre"] == nombreJugador2.value) {
                lugarjugador2 = i;
                verificarjugador2 = true;
            }
        }
        if (verificarjugador1 == false) {
            var nuevoJugador = {'nombre': nombreJugador1.value, 'puntaje': 0};
            jugadores[jugadores.length] = nuevoJugador;
            lugarjugador1 = jugadores.length;
        }
        if (verificarjugador2 == false) {
            var nuevoJugador = {'nombre': nombreJugador2.value, 'puntaje': 0};
            jugadores[jugadores.length] = nuevoJugador;
            lugarjugador2 = jugadores.length - 1;
        }
    }
}
