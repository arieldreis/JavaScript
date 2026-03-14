class Carro{
    constructor(rodas, porta, cor, marca, modelo, placa, acessorios){
        this.rodas = rodas;
        this.portas = porta;
        this.cores = cor;
        this.marcas = marca;
        this.modelos = modelo;
        this.placas = placa;
        this.acessorio = acessorios;
    }
}
const myCar = new Carro(4, 4, "Dark-Blue", "Honda", "Civic 2000", "BRA2E19", "Ar Condicionada, Caixa de som");
console.log(myCar);
//
console.log(`O MODELO DO CARRO É ${myCar.modelos}`);
console.log(`A marca do carro é ${myCar.marcas}`);
console.log(`A cor do seu ${myCar.modelos} é ${myCar.cores}`);
let pergunta = prompt("DIGITE: ");