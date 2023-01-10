

var user;
var rockbutton = document.getElementById("rock");
var paperbutton = document.getElementById("paper");
var scissorsbutton = document.getElementById("scissors");
var resetbutton = document.getElementById("reset");

var mensaje_resultado = document.querySelector(".texto_mensaje_resultado");

scissorsbutton.addEventListener("click", function () {
    comprobar(1)
});
rockbutton.addEventListener("click", function () {
    comprobar(2)
});
paperbutton.addEventListener("click", function () {
    comprobar(3)
});
resetbutton.addEventListener("click", function () {
    document.querySelector(".opciones").style.display = 'flex';
    document.querySelector(".resultados").style.display = 'none';
});



var tijera = 1;
var piedra = 2;
var papel = 3;

function comprobar(user) {
    var cpu = Math.floor((Math.random() * (3 + 1 - 1) + 1));
    if (user != cpu) { // Si han elegido distintas opciones

        if (user === tijera && cpu === papel) {
            console.log("Ganaste con " + tijera)
            mensaje_resultado.innerHTML = 'Has ganado!!! La pc eligio papel';
        } else if (user === tijera && cpu === piedra) {
            console.log("HAS PERDIDO!! La pc eligio piedra")
            mensaje_resultado.innerHTML = 'Has perdido!!! La pc eligio piedra';
        } else if (user === piedra && cpu === tijera) {
            console.log("Ganaste con " + piedra)
            mensaje_resultado.innerHTML = 'Has ganado!!! La pc eligio tijera';
        } else if (user === piedra && cpu === papel) {
            console.log("HAS PERDIDO!!")
            mensaje_resultado.innerHTML = 'Has perdido!!! La pc eligio papel';
        } else if (user === papel && cpu === piedra) {
            console.log("Ganaste con " + papel)
            mensaje_resultado.innerHTML = 'Has ganado!!! La pc eligio piedra';
        } else if (user === papel && cpu === tijera) {
            console.log("HAS PERDIDO!!")
            mensaje_resultado.innerHTML = 'Has perdido!!! La pc eligio tijera';
        }

    } else if (user === cpu) { // Si han elegido la misma opcion
        console.log("EMPATE")
        mensaje_resultado.innerHTML = 'EMPATE';
    }
    
    document.querySelector(".opciones").style.display = 'none';
    document.querySelector(".resultados").style.display = 'flex';
}
