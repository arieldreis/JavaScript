let pessoa = [];
let continua;
let cont = 0;
let imc = [];
do{
    pessoa[cont] = new Pessoa();
    pessoa[cont].nome = window.prompt("Digite o nome do pasciente: ");
    do{
        pessoa.altura = window.prompt("Digite o nome do pasciente em metros: ");
    }while(pessoa.altura === null)
    do{
        pessoa[cont].peso = window.prompt("Digite o peso do pasciente em quilogramas: ");
    }while(pessoa.peso === null);
    pessoa[cont].exame = new Imc(pessoa[cont].altura, pessoa[cont].peso);
    pessoa[cont].exame.calcular();
    cont++;
    continua = window.confirm("Deseja continuar: ");
}while(continua);
console.log(pessoa);

for(let i =0; i < pessoa.length; i++){
    resposta += `<h2>${pessoa[i].nome}</h2>`;
    resposta += `<ul><li><strong>Índice: </strong>${pessoa[i].exame.classificacao}</li></ul>`
}
