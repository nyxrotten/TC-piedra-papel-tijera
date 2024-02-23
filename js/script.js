const botones = document.querySelectorAll(".boton-jugada");
const resultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

let jugadaUsuario;
let jugadaOrdenador;


//botones.addEventListener('click', function() {})


function generarJugada(jugadaUsuario, jugadaOrdenador) {
    if (
        (jugadaUsuario === "piedra" && jugadaOrdenador === "tijera") ||
        (jugadaUsuario === "tijera" && jugadaOrdenador === "papel") ||
        (jugadaUsuario === "papel" && jugadaOrdenador === "piedra")
        
    )
    {
        contador++;
        console.log("Ganaste")
    }
    else if (jugadaUsuario === jugadaOrdenador) {
        console.log("Empate")
    }
    else  {
        console.log("Perdiste")
    }

}

generarJugada("piedra", "papel")







