function imc(){
    // IMC = peso (KG) / (altura(m))*2
    let input1 = document.getElementById('alturainput');
    let input2 = document.getElementById('pesoinput');

    let altura = Number(input1.value);
   let massa = Number(input2.value);
    let resultado = document.getElementById('resultado')

    let imc = peso / (altura * altura);
    resultado.innerHTML = `O resultado é ${imc}`
}