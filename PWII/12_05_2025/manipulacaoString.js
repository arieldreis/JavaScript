var txt01 = "Olá mundo!";
var txt02 = "http://www.x.com.br/categoria/produtos";
var txt03 = "juca@provedor.com";
let resultado = document.getElementById('resultados');

var vetor01 = txt01.split(" ");
console.log(vetor01); // A cada separação de uma frase e outra o depurador irá colocar um vírgula de separação

var vetor02 = txt02.split("/"); 
console.log(vetor02); // A cada slash ela irá colocar uma vígula

var vetor03 = txt03.split("@");
console.log(vetor03); // A cada 'at' ele irá colocar uma vígula de separação

resultado.innerHTML = (`${vetor01[1]} | ${vetor02[2]} | ${vetor03[1]} <br>`); // Irá mostar todos os methodos com a separação de acordo com seu method.

console.log(`O e-mail tem ${txt03.length} caracteres`); // Irá mostrar a quantidade de caracteres que tem dentro da variável txt03
console.log(txt03.slice(2,7)); // Irá mostar os caracteres do índice 2 até o 7 o que resultará 'ca@pr'

//O método substr() é similar a slice, mas foi depreciado
console.log(txt03.replace("provedor","gmail")); // Irá trocar ás frases ao invés de ser 'juca@provedor.com' ficará 'juca@gmail.com'
console.log(`Quarta letra de Olah mundo! - ${txt01.charAt(3)}`); // Irá mostrar a quarta letra no índice 3
console.log(`Último caractere de Olah mundo! - ${txt01.charAt(txt01.length-1)}`); // Retorna a última string.
console.log(`Primeiro caractere de Olah mundo! - ${txt01[0]}`); // Irá mostrar o índice do primeiro caracter.
console.log(`Posição do @ em txt03: - ${txt03.indexOf("@")}`); // Irá mostrar a posição da string '@' se der negativo é pq o índice não existe.
console.log(`Posição do @ em txt02: - ${txt02.indexOf("@")}`); // Irá mostrar a posição da string '@' se der negativo é pq o índice não existe.

console.log(txt01.toUpperCase()); // Converte o texto para todas as letras ficarem maiúscula.
console.log(txt01.toLowerCase()); // Converte o texto para todas as letras ficarem minúscula.