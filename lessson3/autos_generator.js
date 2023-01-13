var marcas = ["toyota", "ford", "mercedes", "peugeot", "citroen"];
var colores = ["verde", "rojo", "purpura", "amarillo", "blanco"];
var annios = [2022, 2020, 2021, 2019, 2018];

function auto(marca, color, annio) {
    this.marca = marca; this.color = color; this.annio = annio
}
for (var i = 0; i <= 30; i++) {
    let autoNuevo = new auto(marcas[Math.floor(Math.random() * 4)], colores[Math.floor(Math.random() * 4)], annios[Math.floor(Math.random() * 4)]);
    console.log(autoNuevo)
}