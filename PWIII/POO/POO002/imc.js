class Imc{
    _altura;
    _peso;
    _indice;
    _classificacao;
    constructor(altura, peso){
        this.altura = altura;
        this.peso = peso;
    }
    calcular(){
        // IMC = peso (kg) / (altura (m))**2
        this._indice = peso/(altura**2);
        return this._indice;
    }
    classificar(){
        let resultado = this.calcular();
        var classificacao;
        if(resultado < 18.5){
            this._classificacao = "Abaixo do peso."
        }else if(resultado < 24.9){
            this._classificacao = "Peso ideal"
        }else if(resultado < 29.9){
            this._classificacao = "Sobre Peso"
        }else if(resultado < 39){
            this._classificacao = "Obesidade"
        }else{
            this._classificacao = "Obesidade Morbita"
        }
    }
    set altura(valor){
        if(!numerico(valor)){
            console.error('O valor do atributo altura deve ser numérico');
        }
    }
    set peso(){

    }
    set indice(valor){

    }
    get altura(){
        return this._altura;
    }
    get peso(){
        return this._peso;
    }
    get indice(){
        let valor = this._indice.toString().replace('.', ',');
        return valor;
    }
}