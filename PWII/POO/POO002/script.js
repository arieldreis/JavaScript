class Pessoa{
    _nome;
    _altura;
    _peso;
    _exame;
    mostrarAltura(){
        let alt = this.altura.toString();
        return alt.replace('.', ',');
    }
    mostrarPeso(){
        
    }
    set nome(valor){
        this._nome = valor;
    }
    set altura(valor){
        let altura = numerico(valor);
        this._altura  = alt ? Number(alt) : null;
    }
    set peso(valor){
        let peso = numerico(valor);
        this._peso = peso ? Number(peso) : null;
    }
    set exame(obj){
        if(typeof(obj) != 'object'){
            console.error("O atributo exame deve receber um objeto");
            obj = null
        }
        this._exame = obj;
    }
    get nome(){
        return this._nome;
    }
    get altura(){
        return this._altura;
    }
    get peso(){
        return this._peso;
    }
    get exame(){
        return this._exame;
    }
}