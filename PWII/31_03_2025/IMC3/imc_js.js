function imc_calculo(){
    // IMC = peso (KG) / (altura (m)) 2
    function numerico(valor){
        var num = valor.replace(',','.');
        if(isNaN(num)){
            window.alert('ERRO! O VALOR DIGITADO NÃO É NUMÉRICO.');
            return false;
        }
        return Number(num);
    }
    var resultado = document.getElementById('resultado');
    var peso = "";
    var altura = "";
    while(!numerico(peso)){
        var peso = window.prompt('Digite seu peso em KG:');  
    }
    while(!numerico(altura)){
        var altura = window.prompt('Digite sua altura em metros:');     
    }
    // Converte as variavéis
    var pesoCovertido = numerico(peso);
    var alturaConvertida = numerico(altura);
    var imc = pesoCovertido / (alturaConvertida)**2;
    if(imc < 18.5){
        resultado.innerHTML = (`<p>O seu imc está em ${imc.toFixed(2)}<br>` +
            `<p>A classificação para isso é de <strong>Abaixo do Peso!</strong></p>`
        );
    }else if(imc >= 18.5 && imc <= 24.9){
        resultado.innerHTML = (`<p>O seu imc está em ${imc.toFixed(2)}<br></p>` +
            `<p>A classificação para isso é de <strong>Peso Normal!</strong></p>`);
    }else if(imc >= 25.0 && imc <= 29.9){
        resultado.innerHTML = (`<p>O seu imc está em ${imc.toFixed(2)}<br></p>` + 
        `<p>A classificação para isso é de <strong>SOBRE PESO!</strong></p>`);
    }else if( imc >= 30.0 && imc <= 34.9){
        resultado.innerHTML = (`<p>O seu imc está em ${imc.toFixed(2)}<br></p>` + 
            `<p>A classificação para isso é de <strong>OBESIDADE GRAU I</strong></p>`);
    }else if(imc >= 35.0 && imc <= 39.9){
        resultado.innerHTML = (`<p>O seu imc está em ${imc.toFixed(2)}<br></p>` + 
            `<p>A classificação para isso é de <strong>OBESIDADE GRAU II</strong></p>`);
    }else{
        resultado.innerHTML = (`<p>O seu imc está em ${imc.toFixed(2)}<br></p>` + 
            `<p>A classificação para isso é de <strong>OBESIDADE GRAU III</strong></p>`);
    }
    console.log(`O tipo é ${typeof(pesoCovertido)} ${typeof(alturaConvertida)}`);
}