const botones = document.querySelectorAll(".boton-jugada");
const resultados = document.getElementById("resultados");
let contadorUsuario = document.getElementById("contador-usuario").innerText
let contadorOrdenador = document.getElementById("contador-ordenador").innerText;


let jugadaUsuario;
let jugadaOrdenador;


document.querySelectorAll(".boton-jugada").forEach(botones => {
    botones.addEventListener("click", function() {
        const jugadaUsuario = this.getAttribute("data-jugada");
        jugar(jugadaUsuario);

    });
});

function generarJugadaOrdenador() {
    const jugadas = ["piedra", "papel", "tijera"];
    return jugadas[Math.floor(Math.random() * jugadas.length)];
}



function generarJugada(jugadaUsuario, jugadaOrdenador) {
    if (
        (jugadaUsuario === "piedra" && jugadaOrdenador === "tijera") ||
        (jugadaUsuario === "tijera" && jugadaOrdenador === "papel") ||
        (jugadaUsuario === "papel" && jugadaOrdenador === "piedra")
        
    )
    {
        contadorUsuario++;
        console.log("Ganaste")
    }
    else if (jugadaUsuario === jugadaOrdenador) {
        console.log("Empate")
    }
    else  {
        contadorOrdenador++;
        console.log("Perdiste")

    }

}

generarJugada("piedra", "papel")

console.log(contadorUsuario)







