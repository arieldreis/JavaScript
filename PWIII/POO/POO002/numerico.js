function numerico(valor){
   var num = typeof(valor) == 'string' ? valor.replae(',', '.') : valor;
    valor.replae(',', '.');
    if(isNaN(num)){
        window.alert("O valor digitado não é numérico.");
        return false;
    }
    return Number(num);
}