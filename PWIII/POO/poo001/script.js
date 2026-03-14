function soco(dano){
    console.log(`O dano do soco será ${dano}`);
}
soco(10);
class Lutador{
    constructor(nome, forca, velocidade, salto, resistencia, flexiblidade, soco){
        this.nome = nome;
        this.forca = forca;
        this.velocidade = velocidade;
        this.salto = salto;
        this.resistencia = resistencia;
        this.flexiblidade = flexiblidade;
        this.soco = soco;
    }
}
const lutador = new Lutador("Mike Tyson", 10, 9.8, 8.8, 9.8, 7.2, 10);
console.log(`O nome do lutador: ${lutador.nome}`);
console.log(`Força do lutador: ${lutador.forca}`);
console.log(`Velocidade lutador:  ${lutador.velocidade}`);
console.log(`Salto lutador:  ${lutador.salto}`);
console.log(`Resistência lutador:  ${lutador.resistencia}`);
console.log(`Flexibilidade lutador:  ${lutador.flexiblidade}`);
console.log(`Soco Lutador: ${lutador.soco}`);