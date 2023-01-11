var pregunta = prompt("Ingresa tu opcion: piedra, papel o tijera");
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var pc = options[Math.floor(Math.random() * 3)];

switch (true) {
    case (user === pc):
        alert(user + " vs " + pc + " " + "empate");
        break;
    case (user === "piedra" && pc === "papel"):
        alert(user + " vs " + pc + " " + "perdiste")
        break;
    case (user === "piedra" && pc === "tijera"):
        alert(user + " vs " + pc + " " + "ganaste!!")
        break;
    case (user === "tijera" && pc === "piedra"):
        alert(user + " vs " + pc + " " + "perdiste")
        break;
    case (user === "tijera" && pc === "papel"):
        alert(user + " vs " + pc + " " + "ganaste!!")
        break;
    case (user === "papel" && pc === "piedra"):
        alert(user + " vs " + pc + " " + "ganaste!!")
        break;
    case (user === "papel" && pc === "tijera"):
        alert(user + " vs " + pc + " " + "perdiste")
        break;

    default:
        alert("error de elección...");
        break;

}

