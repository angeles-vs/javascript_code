class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoDeOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar:'+',
            dividir: '/',
            multiplicar: 'x',
            restar:'-',
        }
    }
    agregarNumero(numero) {
        if(numero=='.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    borrar(){
        this.valorActual=this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual= '';
        this.valorAnterior= '';
        this.tipoDeOperacion= undefined;
        this.imprimirValores();
    }
    computar(tipo){
        this.tipoDeOperacion !== 'igual' && this.calcular();
        this.tipoDeOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual ='';
        this.imprimirValores();
       
    }
    imprimirValores(){

        console.log(this)
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = 
         `${this.valorAnterior} ${this.signos[this.tipoDeOperacion] || ''}`;

    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
console.log(
    valorAnterior, valorActual
)
        if( isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoDeOperacion](valorAnterior, valorActual);
    }

}
